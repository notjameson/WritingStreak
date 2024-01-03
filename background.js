let wordCount = 0;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === "updateCount") {
    wordCount += request.count;
    sendResponse({ wordCount: wordCount });
  }
});
