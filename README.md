# 韓檢初級考古題（TOPIK I）

手機網頁 App（PWA），收錄 TOPIK I 第 102、96、91、83、64 回考古題。

- 聽力：每題音檔、自動播放、0.75／1／1.25 倍速
- 練習模式（即時對錯＋詳解）、模擬考模式（聽力 40 分鐘、閱讀 60 分鐘計時）
- 詳解：逐字底線對照＋完整通順翻譯、選項對照、解題說明、重要單字（漢字）
- 韓文發音朗讀（使用裝置內建語音）
- 錯題本、作答紀錄（存在手機瀏覽器裡）

## 檔案結構

```
index.html              App 主程式
manifest.webmanifest    加到主畫面用的設定
sw.js                   離線快取
icons/                  App 圖示
sessions/index.json     題庫清單
sessions/<回數>/data.json   該回題目與詳解
sessions/<回數>/audio/      聽力音檔
sessions/<回數>/img/        題目圖片
```

## 使用方式

開啟 GitHub Pages 後，用手機瀏覽器打開網址，再「加入主畫面」即可像 App 一樣使用。
