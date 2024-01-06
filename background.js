let wordCount = 0;

// Function to send the current word count to the popup
function sendWordCountToPopup() {
    chrome.runtime.sendMessage({ type: "wordCount", count: wordCount });
}

// Listener for messages from content scripts
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === "updateWordCount") {
        wordCount = request.count;
    }
    if (request.type === "getWordCount") {
        sendWordCountToPopup();
    }
    sendResponse("Event logged: " + request.type)
});