// const dater = new Date(1000000000000) change (milisecnd since 1 jan 1970) into real date
//console.log(dater);
const getWeather = () => {
  const apiId = `4b6b1816bbba8952feeea7c6cf7b4d55`;
  const cityName = document.querySelector(".cityInput").value;
  if (!cityName) {
    alert("Please enter a City ");
    return;
  }
  const weatherData = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apiId}`;
  const forecastWeatherData = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&APPID=${apiId}`;
  fetch(weatherData)
    .then((response) => response.json())
    .then((data) => displayWeather(data))
    .catch((error) => {
      console.error(" can not fetch current weather data", error);
      alert("can not fetch current weather data.Please try again.");
    });
  fetch(forecastWeatherData)
    .then((response) => response.json())
    .then((data) => hourlyDisplayWeather(data.list))
    .catch((error) => {
      console.error(" can not fetch forecast  data", error);
      alert("can not fetch current Forecast  data.Please try again.");
    });
};
function hourlyDisplayWeather(data) {
  const hourlyForcastDIv = document.querySelector(".hourlyForcast");
  hourlyForcastDIv.innerHTML = "";
  const hourlyForcastRealTime = data.slice(0, 8);
  hourlyForcastRealTime.forEach((element) => {
    const date = new Date(element.dt * 1000);
    const iconCode = element.weather[0].icon;
    const hour = date.getHours();
    const tempDiv = Math.round(element.main.temp - 273.15);
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    const hourlyForcastShow = `<div class="hourlyforecastIndiv"><span class="hourlyTime" >${hour}:00</span><img class="houlyIcon" src="${iconUrl}" alt="Weather Icon"/><span class="hourlyTem" >${tempDiv}°C</span></div>`;
    hourlyForcastDIv.innerHTML += hourlyForcastShow;
  });
}
function displayWeather(data) {
  console.log(data);
  const iconDiv = document.querySelector(".weatherIcon");
  const temDiv = document.querySelector(".temperatureDiv");
  const weatherInfoDiv = document.querySelector(".weatherInfo");

  iconDiv.src = "";
  temDiv.innerHTML = "";
  weatherInfoDiv.innerHTML = "";

  if (data.cod === "404") {
    weatherInfoDiv.innerHTML = `<p>${data.message}</p>`;
  } else {
    const iconCode = data.weather[0].icon;
    const temperature = Math.round(data.main.temp - 273.15);
    const city = data.name;
    const description = data.weather[0].description;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    const temperatureDiv = ` <p>${temperature}°C</p>`;
    const desAndCity = ` <p class="city">${city}</p><p>${description}</p>`;

    iconDiv.src = iconUrl;
    iconDiv.alt = description;
    temDiv.innerHTML = temperatureDiv;
    weatherInfoDiv.innerHTML = desAndCity;
    displayIcon();
  }
}
function displayIcon() {
  const iconDiv = document.querySelector(".weatherIcon");
  iconDiv.style.display = "block";
}
