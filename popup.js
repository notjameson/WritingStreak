chrome.runtime.sendMessage({ type: "getWordCount" })
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.type === "wordCount") {
      document.getElementById('count').textContent = request.count;
    }
  }
);