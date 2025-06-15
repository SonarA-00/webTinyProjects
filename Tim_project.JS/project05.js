const prompt = require("prompt-sync")();
const fs = require("fs");
function loadQuestions() {
  try {
    const data = fs.readFilesync("questions.json", "utf8");
    const questions = JSON.parse(data).questions;
    return questions;
  } catch (e) {
    console.log("loading file Error!", e);
    return [];
  }
}
function getRandomQuestions(questions, numQuestions) {
  if (numQuestions > questions.length) {
    numQuestions = questions.length;
  }
  const shuffle = questions.sort(() => {
    return 0.5 - Math.random();
  });
  console.log(shuffle.slice(0, numQuestions));
}
const questions = loadQuestions();
const getQuestions = getRandomQuestions(question, 2);
/* not completed project*/
