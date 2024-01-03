let currentWord = '';
let wordCount = 0;

document.addEventListener('input', (event) => {
  const inputType = event.inputType;

  if (inputType === 'insertText') {
    if (event.data === ' ') {
      currentWord = '';
      wordCount += 1
    } else {
      currentWord += event.data
    }
  }
  console.log('word')
  chrome.runtime.sendMessage({ type: "updateWordCount", count: wordCount });
});