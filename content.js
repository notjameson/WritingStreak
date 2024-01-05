let currentWord = '';
let wordCount = 0;

document.addEventListener('input', (event) => {
  const inputType = event.inputType;

  if (inputType === 'insertText') {
    if (event.data === ' ') {
      currentWord = '';
      wordCount += 1
      console.log(wordCount)
      chrome.runtime.sendMessage(
      { type: "updateWordCount", count: wordCount },
      function (response) {
          console.log(response);
      });
    } else {
      currentWord += event.data
    }
  }
});