function changeDay(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];
  return `${day}, ${hours}:${minutes}`;
}

function showConditions(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#how-many-degrees").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#wind").innerHTML =
    Math.round(response.data.wind.speed) + " km/h";
  document.querySelector("#more-details").innerHTML =
    response.data.weather[0].main;
  document.querySelector("#feels-like").innerHTML = Math.round(
    response.data.main.feels_like
  );
}

function searchCity(city) {
  let apiKey = "d21610d386e2cef043442f8f811868d1";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showConditions);
}

function searchedPosition(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function currentLocation(position) {
  let apiKey = "d21610d386e2cef043442f8f811868d1";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showConditions);
}

function currentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(currentLocation);
}

function changeDegrees(event) {
  event.preventDefault();
  let temperature = document.querySelector("#how-many-degrees");
  temperature.innerHTML = Math.round((2 * 9) / 5 + 32);
}
function changeDegreesAgain(event) {
  event.preventDefault();
  let temperature = document.querySelector("#how-many-degrees");
  temperature.innerHTML = "2";
}

let celsius = document.querySelector("#celsius-link");
celsius.addEventListener("click", changeDegreesAgain);

let fahrenheit = document.querySelector("#fahrenheit-link");
fahrenheit.addEventListener("click", changeDegrees);

let date = document.querySelector("#day-time");
let now = new Date();
date.innerHTML = changeDay(now);

let currentButton = document.querySelector("#current-button");
currentButton.addEventListener("click", currentPosition);

let searchButton = document.querySelector("#search-box");
searchButton.addEventListener("submit", searchedPosition);
