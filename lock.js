// TedsTalk 文章上鎖工具
// 用法：node lock.js <四位數密碼> <文章id>
// 會把 posts.js 中該篇的 body 以 AES-256-GCM 加密，改寫成 locked+enc。
// 密碼請勿寫進任何 repo 檔案。

const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

const [pin, id] = process.argv.slice(2);
if (!pin || !id) { console.error('用法: node lock.js <密碼> <文章id>'); process.exit(1); }

const file = path.join(__dirname, 'posts.js');
let src = fs.readFileSync(file, 'utf8');

const re = new RegExp('(id: "' + id + '"[\\s\\S]*?hook: "[^"]*",)((?:\\n    sign: "[^"]*",)?)\\n    body: `\\n([\\s\\S]*?)`\\n(  \\},)');
const m = src.match(re);
if (!m) { console.error('找不到 id=' + id + ' 的未加密文章（可能已上鎖或格式不符）'); process.exit(1); }

const body = m[3];
const salt = crypto.randomBytes(16);
const iv = crypto.randomBytes(12);
const key = crypto.pbkdf2Sync(pin, salt, 100000, 32, 'sha256');
const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
const enc = Buffer.concat([cipher.update(body, 'utf8'), cipher.final(), cipher.getAuthTag()]);
const payload = salt.toString('base64') + '.' + iv.toString('base64') + '.' + enc.toString('base64');

src = src.replace(re, '$1$2\n    locked: true,\n    enc: "' + payload + '",\n$4');
fs.writeFileSync(file, src);
console.log('✓ 已上鎖 id=' + id + '（body 已加密移除）。記得跑 node build.js 再發佈。');
