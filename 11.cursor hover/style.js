const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (event) => {
  hovermouse(event.pageX, event.pageY);
});

const hovermouse = (pageX, pageY) => {
  cursor.style.left = pageX + "px";
  cursor.style.top = pageY + "px";
};
