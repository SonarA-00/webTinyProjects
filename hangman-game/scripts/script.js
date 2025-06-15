const hangmanImg = document.querySelector(".hangman-box img");
const keyboarddiv = document.querySelector(".keyboard");
const wordDiv = document.querySelector(".word");
const guessedWrongText = document.querySelector(".guessing-word b");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = document.querySelector(".playAgain");
let currentWord;
let wrongGuesse;
let correctLetters;
const maxGuessed = 6;

const gamereset = () => {
  wrongGuesse = 0;
  correctLetters = [];
  hangmanImg.src = `images/hangman-${wrongGuesse}.svg`;
  guessedWrongText.innerText = `${wrongGuesse} / ${maxGuessed}`;
  keyboarddiv
    .querySelectorAll("button")
    .forEach((button) => (button.disabled = false));
  wordDiv.innerHTML = currentWord
    .split("")
    .map(
      () => `<li class="letter"></li> `
    ) /* map()=clear, something inside use for replace*/
    .join("");
  gameModal.classList.remove("show");
};
const getRandomList = () => {
  //select random words and hint from words list.
  /* syntac for call element  in a obj*/ const { word, hint } =
    wordList[Math.floor(Math.random() * wordList.length)];
  currentWord = word;
  console.log(word);
  document.querySelector(".hint b").innerText = hint;
  gamereset();
};
// display the modal victory or game over
const gameOver = (isVictory) => {
  setTimeout(() => {
    const modalText = isVictory
      ? `You found the word: `
      : `The correct answer was: `;
    gameModal.querySelector("img").src = `images/${
      isVictory ? "Victory" : "Lost"
    }.gif`;
    gameModal.querySelector("h4").innerText = `${
      isVictory ? "Congrat" : "Game Over"
    }`;
    gameModal.querySelector(
      "p"
    ).innerHTML = `${modalText}<b> ${currentWord}</b>`;
    gameModal.classList.add("show");
  }, 300);
};
//check if letter exist in CurrentWord
const initGame = (button, clickedLetter) => {
  if (currentWord.includes(clickedLetter)) {
    //showing all correct letter on HTML
    [...currentWord].forEach((letter, index) => {
      if (letter === clickedLetter) {
        correctLetters.push(letter);
        wordDiv.querySelectorAll("li")[index].innerText = letter;
        wordDiv.querySelectorAll("li")[index].classList.add("guessed");
      }
    });
  } else {
    wrongGuesse++;
    hangmanImg.src = `images/hangman-${wrongGuesse}.svg`;
  }
  button.disabled = true;
  guessedWrongText.innerText = `${wrongGuesse} / ${maxGuessed}`;
  //calliing gameOver fuctions if these condition meet
  if (wrongGuesse === maxGuessed) return gameOver(false);
  if (currentWord.length === correctLetters.length) return gameOver(true);
};
// create keyboard buttons and add even listeners
for (let i = 97; i <= 122; i++) {
  const button = document.createElement("button");
  button.innerText = String.fromCharCode(i);
  keyboarddiv.appendChild(button);
  button.addEventListener("click", (e) =>
    initGame(e.target, String.fromCharCode(i))
  );
}
getRandomList();
playAgainBtn.addEventListener("click", getRandomList);
