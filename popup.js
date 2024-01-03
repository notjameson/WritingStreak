chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.wordCount) {
      document.getElementById('wordCount').textContent = request.wordCount;
    }
  }
);