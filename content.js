// blocks chat iframes
function blockChatIframes() {
  const iframes = document.querySelectorAll('iframe');
  
  // looking for minnit.org references
  iframes.forEach(iframe => {
    if (iframe.src.includes('chat') || iframe.src.includes('https://fextralife.minnit.org')) {
      iframe.parentNode.removeChild(iframe);
      console.log('Chat iframe removed:', iframe.src);
    }
  });
}

// function for classname blocking variable
function hideElementsWithClass(className) {
  const elements = document.querySelectorAll('.' + className);
  elements.forEach(element => {
    element.style.display = 'none';
    console.log('points down - class "' + className + '" hidden:', element);
  });
}

// function to hide elements with target source
function hideElementsWithSrc(sourceURL) {
  const elements = document.querySelectorAll(`[src*="${sourceURL}"]`);
  elements.forEach(element => {
    element.style.display = 'none';
    console.log('points down - element with src "' + sourceURL + '" hidden:', element);
  });
}

// mutation observer declaration
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'childList') {
      // functions with variables
      blockChatIframes();
      hideElementsWithClass('minnit-embedded');
      hideElementsWithSrc('https://fextralife.minnit.org');
    }
  });
});

// observes entire document
observer.observe(document.body, { subtree: true, childList: true });

// initial execution on DOM load
document.addEventListener('DOMContentLoaded', () => {
  blockChatIframes();
  hideElementsWithClass('minnit-embedded');
  hideElementsWithSrc('https://fextralife.minnit.org');
});
