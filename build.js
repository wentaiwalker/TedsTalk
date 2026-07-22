// TedsTalk build 腳本
// 用法：node build.js
// 讀取 posts.js（唯一資料源），產出：
//   posts-index.js   首頁目錄（只含 metadata，不含內文）
//   p/<id>.html      每篇獨立靜態頁（含 og 分享卡；鎖定篇含解鎖 UI）
//   covers-png/<id>.png  封面 PNG（給 LINE/FB/IG 分享預覽用）
// 需要 @resvg/resvg-js（沙盒中以 NODE_PATH 指向安裝位置）

const fs = require('fs');
const path = require('path');

// ====== 設定 ======
const SITE = 'https://wentaiwalker.github.io/TedsTalk';
const GOATCOUNTER = 'tedstalk'; // 留空 = 不埋分析
// ==================

const vm = require('vm');
const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(__dirname, 'posts.js'), 'utf8'), ctx);
const POSTS = ctx.window.POSTS;
if (!POSTS || !POSTS.length) { console.error('posts.js 讀取失敗'); process.exit(1); }

fs.mkdirSync(path.join(__dirname, 'p'), { recursive: true });
fs.mkdirSync(path.join(__dirname, 'covers-png'), { recursive: true });

const analytics = GOATCOUNTER
  ? `<script data-goatcounter="https://${GOATCOUNTER}.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>`
  : '';

// ---- 1. posts-index.js（首頁目錄，無內文）----
const index = POSTS.map(p => ({
  id: p.id, date: p.date, tag: p.tag, cover: p.cover,
  title: p.title, hook: p.hook, locked: !!p.locked
}));
fs.writeFileSync(path.join(__dirname, 'posts-index.js'),
  '// 由 build.js 自動產生，勿手改\nwindow.POSTS_INDEX = ' + JSON.stringify(index, null, 1) + ';\n');
console.log('✓ posts-index.js（' + index.length + ' 篇）');

// ---- 2. 封面 PNG ----
let Resvg;
try { Resvg = require('@resvg/resvg-js').Resvg; } catch (e) { Resvg = null; console.log('! resvg 未安裝，跳過 PNG'); }
if (Resvg) {
  for (const p of POSTS) {
    const svgPath = path.join(__dirname, p.cover);
    const pngPath = path.join(__dirname, 'covers-png', p.id + '.png');
    if (fs.existsSync(svgPath)) {
      const needRebuild = !fs.existsSync(pngPath) || fs.statSync(svgPath).mtimeMs > fs.statSync(pngPath).mtimeMs;
      if (needRebuild) {
        const r = new Resvg(fs.readFileSync(svgPath, 'utf8'), { font: { loadSystemFonts: true }, fitTo: { mode: 'width', value: 600 } });
        fs.writeFileSync(pngPath, r.render().asPng());
        console.log('✓ covers-png/' + p.id + '.png');
      }
    }
  }
}

// ---- 3. 每篇靜態頁 ----
const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');

function page(p) {
  const url = `${SITE}/p/${p.id}.html`;
  const img = `${SITE}/covers-png/${p.id}.png`;
  const head = `<!DOCTYPE html>
<html lang="zh-Hant">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(p.title)} — TedsTalk</title>
<meta name="description" content="${esc(p.hook)}">
<meta property="og:type" content="article">
<meta property="og:site_name" content="TedsTalk">
<meta property="og:title" content="${esc(p.title)}">
<meta property="og:description" content="${esc(p.hook)}">
<meta property="og:image" content="${img}">
<meta property="og:url" content="${url}">
<meta name="twitter:card" content="summary_large_image">
<link rel="stylesheet" href="../style.css">
${analytics}
</head>
<body>
<header class="top">
  <div class="top-in">
    <a class="logo" href="../index.html">TedsTalk<span>爸爸想跟你說的事</span></a>
  </div>
</header>
<main class="art" id="art">`;

  const kicker = `<div class="kicker"><span class="chip">${esc(p.tag)}</span><span>${p.date}</span></div>
  <h1>${esc(p.title)}</h1>
  <div class="hook">${esc(p.hook)}</div>
  <img class="cover" src="../${p.cover}" alt="${esc(p.title)}">`;

  const foot = `</main>
</body>
</html>`;

  if (!p.locked) {
    return head + `
  ${kicker}
  <div class="content">${p.body}</div>
  ${p.sign ? `<div class="sign">— <b>${esc(p.sign)}</b></div>` : ''}
  <a class="back" href="../index.html">← 回所有文章</a>
` + foot;
  }

  // 鎖定篇：內嵌加密內容與解鎖 UI
  return head + `
  ${kicker}
  <div class="lockbox" id="lockbox">
    <div class="lock-icon">🔒</div>
    <div class="lock-title">這篇文章上鎖了</div>
    <div class="lock-sub">輸入四位數密碼解鎖</div>
    <input id="pin" type="password" inputmode="numeric" maxlength="4" pattern="[0-9]*" placeholder="••••" autocomplete="off">
    <button id="unlock">解鎖</button>
    <div id="err" class="lock-err"></div>
  </div>
  <div class="content" id="content"></div>
  <a class="back" href="../index.html">← 回所有文章</a>
<script>
const ENC = ${JSON.stringify(p.enc)};
function b64(s){ return Uint8Array.from(atob(s), c => c.charCodeAt(0)); }
async function decrypt(enc, pin){
  const [saltB, ivB, dataB] = enc.split('.');
  const salt=b64(saltB), iv=b64(ivB), data=b64(dataB);
  const km = await crypto.subtle.importKey('raw', new TextEncoder().encode(pin), 'PBKDF2', false, ['deriveKey']);
  const key = await crypto.subtle.deriveKey({name:'PBKDF2',salt,iterations:100000,hash:'SHA-256'}, km, {name:'AES-GCM',length:256}, false, ['decrypt']);
  return new TextDecoder().decode(await crypto.subtle.decrypt({name:'AES-GCM',iv}, key, data));
}
async function tryPin(pin, remember){
  try{
    const body = await decrypt(ENC, pin);
    if(remember) sessionStorage.setItem('tt_pin', pin);
    document.getElementById('lockbox').style.display='none';
    document.getElementById('content').innerHTML = body;
    return true;
  }catch(e){ return false; }
}
const saved = sessionStorage.getItem('tt_pin');
if(saved) tryPin(saved, false);
const pinEl = document.getElementById('pin');
const go = async () => {
  if(!(await tryPin(pinEl.value, true))){
    document.getElementById('err').textContent = '密碼不對，再試一次';
    pinEl.value=''; pinEl.focus();
  }
};
document.getElementById('unlock').addEventListener('click', go);
pinEl.addEventListener('keyup', e => { if(e.key==='Enter') go(); });
</script>
` + foot;
}

for (const p of POSTS) {
  fs.writeFileSync(path.join(__dirname, 'p', p.id + '.html'), page(p));
}
console.log('✓ p/*.html（' + POSTS.length + ' 頁）');
console.log('build 完成');
