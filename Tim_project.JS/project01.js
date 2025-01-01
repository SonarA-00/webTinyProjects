const prompt = require("prompt-sync")();
const name = prompt("Hello!! What is your name ");

const shouldWePlay = prompt(`Hey ${name} Do you wanna play now? `);

const answer = shouldWePlay.toLowerCase();
if (answer === "yes" || answer === "y") {
  const direction = prompt(`choose one direction to go left or right?: `);
  if (direction.toLowerCase() === "left") {
    console.log("it will be a bridge in the left side.");
    const cross = prompt(`do you want to continuous crossing the bridge? `);
    if (cross.toLowerCase() === "yes" || cross.toLowerCase() === "y") {
      console.log(
        "ahh the bridge is weak and broke you falling in to the river !! get lost."
      );
    } else if (cross.toLowerCase() === "no" || cross.toLowerCase() === "n") {
      console.log(
        "you do not cross the bridge but you got bite by a snake!! get lost."
      );
    } else {
      console.log("Invalid!!!");
    }
  } else if (
    direction.toLowerCase === "right" ||
    direction.toLowerCase() === "r"
  ) {
    const eatOr = prompt(
      `you will see a chicken fried and CoCa. would you like to eat it? `
    );
    if (eatOr.toLowerCase() === "yes" || eatOr.toLowerCase() === "y") {
      console.log("the food is poisioneus !! you died :) get lost!!!");
    } else {
      console.log(
        "you are choosing the right decision it will have a elicoter come and pick you up here so wait. CONGRAT:))YOU WWINNN"
      );
    }
  }
} else if (answer === "no" || answer === "n") {
  console.log("Ok then you get lost <_>");
} else {
  console.log("you are input invalid !!!!!");
}
