// we probably don't need this, but might use it in the future.
let currentWord = '';

document.addEventListener('input', (event) => {
  const inputType = event.inputType;

  if (inputType === 'insertText') {
    if (event.data === ' ') {
      currentWord = '';
      chrome.runtime.sendMessage(
      { type: "updateWordCount"},
      function (response) {
          console.log(response);
      });
    } else {
      currentWord += event.data
    }
  }
});