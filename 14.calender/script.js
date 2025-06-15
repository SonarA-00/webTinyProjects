const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const dayOfWeeks = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Thursday",
  "Wenesday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let today = new Date();
console.log(today);
date.innerText = (today.getDate() < 10 ? "0" : "") + today.getDate();
day.innerText = dayOfWeeks[today.getDay()];
month.innerText = months[today.getMonth()];
year.innerText = today.getFullYear();

// end 2024/04/04
