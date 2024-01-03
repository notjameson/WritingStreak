// background.js

// Variable to store word count
let wordCount = 0;

// Listener for messages from content scripts
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === "updateWordCount") {
        // Update word count
        wordCount = request.count;
    }
});

// Function to send the current word count to the popup
function sendWordCountToPopup() {
    chrome.runtime.sendMessage({ type: "wordCount", count: wordCount });
}

// Listener for popup requests
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === "getWordCount") {
        sendWordCountToPopup();
    }
});
