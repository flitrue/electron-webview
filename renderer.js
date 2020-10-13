// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const webview = document.getElementById("foo");
webview.addEventListener("new-window", (e) => {
  const protocol = require("url").parse(e.url).protocol;
  if (protocol === "http:" || protocol === "https:") {
    webview.src = e.url;
  }
});

// 开启webview调试窗口
webview.addEventListener('dom-ready', () => {
  webview.openDevTools()
})
