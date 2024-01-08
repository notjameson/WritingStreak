let wordCount = 0;
let onIconPath = ({ "16": "/Icons/streak-16.png",
"32": "/Icons/streak-32.png" })
let offIconPath = ({ "16": "/Icons/streak-off-16.png",
"32": "/Icons/streak-off-32.png" })

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
    if (request.type === "iconState") {
        console.log(request.value)
        let iconPath = request.value ? onIconPath : offIconPath;
        chrome.action.setIcon({
            path: iconPath
        })
    }
    sendResponse("Event logged: " + request.type)
});