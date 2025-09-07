const words = ["Omar Ashraf", "Frontend Developer"];
let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let deleting = false;
const typingSpeed = 160;
const deletingSpeed = 90;
const waitTime = 1200;

const typingBox = document.querySelector(".typing-box");

function typeEffect() {
  if (wordIndex === words.length) wordIndex = 0;
  currentWord = words[wordIndex];

  if (deleting) {
    charIndex--;
    typingBox.textContent = currentWord.slice(0, charIndex);
  } else {
    charIndex++;
    typingBox.textContent = currentWord.slice(0, charIndex);
  }

  if (!deleting && charIndex === currentWord.length) {
    setTimeout(() => deleting = true, waitTime);
  } else if (deleting && charIndex === 0) {
    deleting = false;
    wordIndex++;
  }

  setTimeout(typeEffect, deleting ? deletingSpeed : typingSpeed);
}

typeEffect();