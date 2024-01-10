let wordCount = 0;
let state = false;
let onIconPath = ({ "16": "/Icons/streak-16.png",
"32": "/Icons/streak-32.png" })
let offIconPath = ({ "16": "/Icons/streak-off-16.png",
"32": "/Icons/streak-off-32.png" })

function sendWordCountToPopup() {
    chrome.runtime.sendMessage({ type: "wordCount", count: wordCount });
}

// Listener for messages from content scripts
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    if (request.type === "updateWordCount") {
        if (state) {
            // only update if extension is active
            wordCount += 1;
        }
    }
    if (request.type === "getWordCount") {
        sendWordCountToPopup();
    }
    if (request.type === "updateState") {
        let iconPath = state ? onIconPath : offIconPath;
        chrome.action.setIcon({
            path: iconPath
        })
        state = state ? false : true
    }
    sendResponse("Event logged: " + request.type)
});