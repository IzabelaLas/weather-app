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
function changeThePicture(response) {
  if (response === "AE") {
    return `url("https://images.unsplash.com/photo-1527288012656-13ea8f91bd63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80")`;
  } else if (response === "PT") {
    return `url("https://images.unsplash.com/photo-1585208798174-6cedd86e019a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80")`;
  } else {
    return `url("https://images.unsplash.com/photo-1492541737557-dfd592c6e42d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`;
  }
}

function showConditions(response) {
  document.querySelector("#city").innerHTML = response.data.name + ",";
  document.querySelector("#country").innerHTML = response.data.sys.country;
  document.querySelector("#how-many-degrees").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#wind").innerHTML =
    " " + Math.round(response.data.wind.speed) + " km/h";
  document.querySelector("#more-details").innerHTML =
    " " + response.data.weather[0].main;
  document.querySelector("#feels-like").innerHTML =
    " " + Math.round(response.data.main.feels_like);

  document.body.style.backgroundImage = changeThePicture(
    response.data.sys.country
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

function changeToFarenheit(event) {
  event.preventDefault();
  let temperature = document.querySelector("#how-many-degrees");
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheitTemperature = (celsius * 9) / 5 + 32;
  temperature.innerHTML = Math.round(fahrenheitTemperature);
}
function changeToCelcius(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let temperature = document.querySelector("#how-many-degrees");
  temperature.innerHTML = Math.round(celsius);
}
let celsius = null;

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", changeToCelcius);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", changeToFarenheit);

let date = document.querySelector("#day-time");
let now = new Date();
date.innerHTML = changeDay(now);

let currentButton = document.querySelector("#current-button");
currentButton.addEventListener("click", currentPosition);

let searchButton = document.querySelector("#search-box");
searchButton.addEventListener("submit", searchedPosition);
