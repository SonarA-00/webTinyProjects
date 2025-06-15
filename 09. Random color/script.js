const btn = document.getElementById("btn");
const hex = document.getElementById("hexCode");
function randomColor() {
  let letters = "1234567890ABCDEF";
  let color = "#";
  for (i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

btn.addEventListener("click", () => {
  document.body.style.background = randomColor();
  hex.innerText = randomColor();
});
