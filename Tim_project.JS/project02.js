const prompt = require("prompt-sync")();

function getNumber(numberOutput) {
  while (true) {
    const number = parseFloat(prompt(`Enter Number ` + numberOutput + `:`));
    if (isNaN(number)) {
      console.log("invalid Number try Again!!");
    } else {
      return number;
    }
  }
}

const number1 = getNumber("One");
const number2 = getNumber("Two");
const operator = prompt(`Enter Type of Operator: `);

switch (operator) {
  case "+":
    result = number1 + number2;
    break;
  case "-":
    result = number1 - number2;
    break;
  case "*":
    result = number1 * number2;
    break;
  case "/":
    if (number2 === 0) console.log("not quite a value!");
    result = number1 / number2;
    break;
  default:
    console.log("invalid Number!");
}

console.log(`${number1} ${number2}= ${result}`);
