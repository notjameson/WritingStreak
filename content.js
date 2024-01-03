function countWords(text) {
    return text.split(/\s+/).filter(Boolean).length;
  }
  const textElements = document.querySelectorAll('textarea, input[type="text"]');
  
  textElements.forEach((element) => {
    element.addEventListener('input', () => {
      const wordCount = countWords(element.value);
      chrome.runtime.sendMessage({ message: "updateCount", count: wordCount }, (response) => {
        console.log(`Total words written: ${response.wordCount}`);
      });
    });
  });
  