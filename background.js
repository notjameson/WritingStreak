// background.js

// Variable to store word count
let wordCount = 0;

// Listener for messages from content scripts
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log('start background listener')
    if (request.type === "updateWordCount") {
        // Update word count
        console.log('update worker count listener detected')
        wordCount = request.count;
    }
    sendResponse("response sent")
});

// Function to send the current word count to the popup
function sendWordCountToPopup() {
    chrome.runtime.sendMessage({ type: "wordCount", count: wordCount });
}

// Listener for popup requests
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("message received")
    if (request.type === "getWordCount") {
        sendWordCountToPopup();
        sendResponse("response sent")
    }
});
