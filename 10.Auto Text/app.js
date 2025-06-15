const typingText = document.querySelector(".typeText");
const cursor = document.querySelector(".cursor");
const word = ["cool", "lovable", "sweet", "awsome", "superhero", "useful"];
const typingDelay = 200;
const eraseDelay = 200;
const newWordDelay = 2000;
let index = 0;
let charIndex = 0;
document.addEventListener("DOMContentLoaded", () => {
  if (word.length >= 0) {
    setTimeout(type, typingDelay);
  }
});

function type() {
  if (charIndex < word[index].length) {
    typingText.textContent += word[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newWordDelay);
  }
  function erase() {
    if (charIndex > 0) {
      typingText.textContent = word[index].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, eraseDelay);
    } else {
      index++;
      if (index >= word.length) {
        index = 0;
      }

      setTimeout(type, typingDelay + 1100);
    }
  }
}
