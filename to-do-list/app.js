const inputField = document.querySelector(".input");
const button = document.querySelector(".button");
const listContainer = document.querySelector("ul");

button.addEventListener("click", addTask);

inputField.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
function addTask() {
  if (inputField.value == "") {
    alert("please Enter something");
  } else {
    let task = inputField.value;
    const li = document.createElement("li");
    const span = document.createElement("span");

    li.textContent = task;
    span.textContent = "X";
    li.appendChild(span);
    listContainer.appendChild(li);
    // saveData();
    updateHeight();

    inputField.value = "";

    li.addEventListener("click", () => {
      li.classList.toggle("checked");
      // saveData();
      updateHeight();
    });

    span.addEventListener("click", function (e) {
      e.stopPropagation();
      this.parentElement.remove();
      // saveData();
      updateHeight();
    });
  }
}

const updateHeight = () => {
  const todoApp = document.querySelector(".to-do-app");
  if (todoApp.scrollHeight > todoApp.clientHeight) {
    todoApp.classList.add("expanded");
  }
};

// we need to store temperary cuz we do not have a clue about back-end yet
// const saveData = () => {
//   localStorage.setItem("data", listContainer.innerHTML);
// };
// const showData = () => {
//   listContainer.innerHTML = localStorage.getItem("data");
// };
// showData();
// it does not work the way i expected
