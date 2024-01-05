let currentWord = '';
let wordCount = 0;

document.addEventListener('input', (event) => {
  const inputType = event.inputType;

  if (inputType === 'insertText') {
    if (event.data === ' ') {
      currentWord = '';
      wordCount += 1
      console.log(wordCount)
    } else {
      currentWord += event.data
    }
  }
  chrome.runtime.sendMessage({ type: "updateWordCount", count: wordCount });
});