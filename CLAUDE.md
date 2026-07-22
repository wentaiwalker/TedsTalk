# TedsTalk — Claude 工作守則

這是 Ted 寫給孩子（大一、高一）的觀念網站。你（Claude）的任務：陪 Ted 討論題目、成文、建置、發佈。

- 正式網站：https://wentaiwalker.github.io/TedsTalk/
- 部署：GitHub Pages，main 分支根目錄。**推上 main = 直接上線。**
- 流量報表：https://tedstalk.goatcounter.com

## 最重要的編輯原則

1. **Ted 的原話是精華**。他在對話中提供的親身故事、比喻、用詞，盡量原文保留，只做最輕的斷句與標點整理。不要改寫成你的話。
2. **先給 Ted 看全文、他說 OK 才發佈**。絕不擅自上線。
3. 語言：繁體中文、口語親近，寫給青少年看。每篇約 500–800 字。
4. 標題要讓青少年想點（可以把文中最有力的一句拉上來當標題）。
5. 口吻：第 1、2 篇（id 001、002）是「爸爸」口吻並署名（`sign: "爸爸"`）；**id 003 起是「平常人分享觀點」，不用「爸爸」自稱、不加 sign 欄位**。
6. 引用名人事例前先查證（web search），文末不需要列 sources，但事實必須正確。

## 發佈流程（每次新文章）

1. 在 `posts.js` 陣列**最前面**加一篇：`id`（三位數遞增）、`date`、`tag`（2字類別）、`cover: "covers/<id>.svg"`、`title`、`hook`（一句勾子）、`body`（HTML 段落，重點用 `<strong>`）。
2. 做封面 `covers/<id>.svg`：600×800、漸層底色（每篇配色不同）、大字標題、簡單圖形意象。超能力系列用深色底＋螢光主色＋右上角「超能力 #N」徽章（參考 006、007）。
3. 建置：`npm install`（第一次）→ `node build.js`。會產生 `posts-index.js`、`p/<id>.html`、`covers-png/<id>.png`。
4. Commit **全部變更**（posts.js、covers/、p/、covers-png/、posts-index.js）並推上 main。
5. 提醒 Ted 用 Cmd+Shift+R（或手機重整）看最新。

## 密碼鎖文章

- 鎖定篇在 posts.js 用 `locked: true` + `enc: "<加密字串>"`（無 body）。
- 上鎖工具：`node lock.js <四位數密碼> <文章id>`（會把該篇 body 加密後原地改寫 posts.js）。
- **密碼不存在 repo 裡**（repo 是公開的）。需要上鎖／解鎖時，請 Ted 在對話中提供萬用密碼。
- 解鎖顯示邏輯已在 build.js 的鎖定頁模板，無需改動。

## 架構速覽

- `posts.js` = 唯一資料源（手改這個）；`posts-index.js`、`p/`、`covers-png/` 都是 build.js 產物（勿手改）。
- `article.html` 只是舊連結轉址。樣式在 `style.css`（卡片瀑布流＝小紅書風）。
- 分析：GoatCounter 代碼在 build.js 頂部 `GOATCOUNTER`，index.html 內也有一份 snippet。

## 待寫題目 backlog

見 `_ideas.md`（若存在）。目前排隊中：
1. 超能力系列 #3〈我是數據分析專家〉——核心金句「數據不會騙人，人會」。
2. 〈窮則變，變則通〉——修身齊家治國平天下／最佳方案→C/P值方案→不會死的60分方案／享受結果。

## 給雲端／手機工作階段的注意事項

- 你可能在 Anthropic 雲端 sandbox 執行（Claude Code on web/mobile）。npm 依賴見 package.json（@resvg/resvg-js 用於封面 PNG）。若 resvg 安裝失敗，build.js 會跳過 PNG 繼續產頁（分享卡會暫缺新封面，回頭補跑即可）。
- 若你只能開 PR 而不能直推 main：開 PR 後告訴 Ted 去 GitHub App 按 merge，merge 即上線。

## Git 安全規則（重要，防止歷史污染）

1. **每次工作階段開始，一律從 main 重新 clone／pull 最新**。不要沿用舊工作階段的本地分支。
2. **禁止 force push**。若 push 被拒絕，代表你的本地歷史過時——重新 clone 再把變更套上去，**不要 merge 舊歷史**（曾因此把已清洗掉的機密明文重新帶回 main）。
3. 要上鎖的文章：**先跑 lock.js 加密、再 commit**。明文絕不能進入 git 歷史。
4. commit 簽章顯示 Unverified 無所謂，不需要為此改寫歷史。
