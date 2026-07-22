# TedsTalk — 爸爸想跟你說的事

一位爸爸每天寫一個觀念，給大一與高一的孩子。小紅書卡片式，手機優先。

## 檔案結構
- `posts.js` — **唯一資料源**（新增/修改文章只改這裡；鎖定文章存加密字串）
- `build.js` — 建置腳本：`node build.js` 產生下列三樣
  - `posts-index.js` — 首頁目錄（只含標題等 metadata，不含內文，載入快）
  - `p/<id>.html` — 每篇獨立靜態頁（含 og 分享卡，貼到 LINE/FB 有預覽圖）
  - `covers-png/<id>.png` — 封面 PNG（分享預覽用；SVG 轉出）
- `index.html` — 首頁瀑布流卡片（讀 posts-index.js）
- `article.html` — 舊連結轉址（article.html?id=X → p/X.html）
- `style.css` — 樣式
- `covers/` — 封面 SVG 原稿

## 每天新增一篇
1. 在 `posts.js` 陣列**最前面**加一個物件（id、date、tag、cover、title、hook、body）。
2. 在 `covers/` 放同名封面（例如 `008.svg`）。
3. 跑 `node build.js`（需 @resvg/resvg-js），commit 全部產出、push。

## 密碼鎖文章
- 內容以 AES-256-GCM 加密存於 `enc` 欄位（`locked: true`），萬用密碼解鎖。
- 未解鎖時原始碼只有亂碼；輸入一次密碼，同瀏覽期間全部解鎖。

## 流量分析
- `build.js` 頂部 `GOATCOUNTER` 填入帳號代碼後重 build 即啟用。

## 部署到 GitHub Pages（確認成品後）
1. 在 GitHub 建一個 repo，例如 `TedsTalk`。
2. 上傳本資料夾所有檔案。
3. Settings → Pages → Source 選 `main` 分支、根目錄 `/`。
4. 幾分鐘後網址：`https://<你的帳號>.github.io/TedsTalk/`
