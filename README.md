# 胖超詩詞閱讀書寫系統 PKG369

本版修正手機／平板在書寫頁底部「離開」按鈕無法返回閱讀頁的問題，並保留 上一版的檔案整理、山水胖字 APP 圖示與手機／平板順滑書寫優化。

## 本版修正

- 將書寫頁 `goBack()` 改為返回 `reader.html`。
- 修正手機底部浮動工具列的「離開」按鈕，原本只呼叫 `exitWritingFullscreen()`，在非全螢幕時看起來沒有反應。
- 新增 `leaveWritingPage()`，手機點擊「回閱讀」會直接回到閱讀頁。
- 回閱讀頁時會帶入目前作品標題與作品索引，閱讀頁會自動恢復原作品。
- 加入 `click / pointerup / touchend` 三層事件保險，避免手機觸控事件被畫布或舊工具列攔截。

## 上傳方式

請將 ZIP 解壓後的全部內容覆蓋 GitHub repo 根目錄，不要只替換單一檔案。

## 建議測試入口

- 手機首頁：`mobile.html?pkg=369`
- 手機作品庫：`reader.html?view=mobile&open=library&pkg=369`
- 書寫頁：`writing.html?pkg=369`

上傳後若手機仍看到舊畫面，請刪除主畫面 APP，清除瀏覽器該網站資料，再重新加入主畫面。
