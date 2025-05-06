const typedWords = document.querySelector("#typedWord");
const typingWords = document.querySelector(".typingWord");
const button = document.querySelector("#btn");
let startTime, endTime;
const startGame = () => {
  let radomWord = Math.floor(Math.random() * sentences.length);
  typingWords.innerText = sentences[radomWord];
  let date = new Date();

  startTime = date.getTime(); // getTime() will count time for 1 jan 1970 -> date in miliseconds
  button.innerText = "Done";
};

const endGame = () => {
  let date = new Date();
  endTime = date.getTime();
  let totalTime = 0,
    wordsCount = 0;
  totalTime = (endTime - startTime) / 1000; // change fom milisecond to seconds
  let totalWord = typedWords.value;
  wordsCount = wordCounter(totalWord);
  let finalMsg = `You typed Total: ${wordsCount} words in ${totalTime} seconds.`;
  typingWords.innerText = finalMsg;
};

let wordCounter = (word) => {
  let counter = word.split(" ").length;
  return counter;
};

button.addEventListener("click", function () {
  console.log(this);
  if (this.innerText == "Start") {
    typedWords.disabled = false;
    startGame();
  } else if (this.innerText == "Done") {
    typedWords.disabled = true;
    endGame();
  }
});
// 2024/04/01 ends
 