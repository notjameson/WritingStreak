document.addEventListener('DOMContentLoaded', () => {
    chrome.runtime.sendMessage({ message: "getCount" }, (response) => {
      document.getElementById('count').textContent = response.wordCount;
    });
  });
  