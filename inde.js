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
function displayForecast() {
  let forecastElement = document.querySelector("#forecast");

  let forecastHTML = `<div class="row">`;
  let days = ["Wed", "Thu", "Fri", "Sat", "Sun"];
  days.forEach(function (day) {
    forecastHTML =
      forecastHTML +
      `  
        <div class="col-2">
          <div class="weather-forecast-date">${day}</div>
          <div class="weather-forecast-emoji">
          <i class="fas fa-cloud-showers-heavy rain"></i>
          </div>
          <div class="weather-forecast-temperatures">
           <span class="weather-forecast-temperature-max">3°</span>
           <span class="weather-forecast-temperature-min">-2°</span>
           </div>
          </div>`;
  });
  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

function changeThePicture(response) {
  if (response === "AE") {
    return `url("https://images.unsplash.com/photo-1527288012656-13ea8f91bd63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80")`;
  } else if (response === "PT") {
    return `url("https://images.unsplash.com/photo-1584064149621-aa938221737e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80")`;
  } else if (response === "PL") {
    return `url("https://images.unsplash.com/photo-1577133192629-5140c5371590?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`;
  } else if (response === "CH") {
    return `url("https://images.unsplash.com/photo-1624543349832-2e70c917cc12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80")`;
  } else if (response === "DE") {
    return `url("https://images.unsplash.com/photo-1618259278412-2819cbdea4dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80")`;
  } else if (response === "ES") {
    return `url("https://images.unsplash.com/photo-1544918877-460635b6d13e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80")`;
  } else if (response === "JP") {
    return `url("https://images.unsplash.com/photo-1557409518-691ebcd96038?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`;
  } else if (response === "AU") {
    return `url("https://images.unsplash.com/photo-1613079900861-0b9ecc4e1b93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1310&q=80")`;
  } else if (response === "US") {
    return `url("https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`;
  } else if (response === "FR") {
    return `url("https://images.unsplash.com/photo-1513736302339-d4d0335c0fb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`;
  } else if (response === "FI") {
    return `url("https://images.unsplash.com/photo-1610963196817-7d1415647029?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`;
  } else if (response === "GB") {
    return `url("https://images.unsplash.com/photo-1488747279002-c8523379faaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`;
  } else if (response === "IT") {
    return `url("https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1096&q=80")`;
  } else if (response === "EG") {
    return `url("https://images.unsplash.com/photo-1539768942893-daf53e448371?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80")`;
  } else if (response === "AZ") {
    return `url("https://images.unsplash.com/photo-1596306499398-8d88944a5ec4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80")`;
  } else if (response === "CN") {
    return `url("https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`;
  } else if (response === "CL") {
    return `url("https://images.unsplash.com/photo-1557974040-3bec341da09b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`;
  } else if (response === "IE") {
    return `url("https://images.unsplash.com/photo-1605969353711-234dea348ce1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`;
  } else if (response === "MX") {
    return `url("https://images.unsplash.com/photo-1518638150340-f706e86654de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80")`;
  } else if (response === "PH") {
    return `url("https://images.unsplash.com/photo-1529686342540-1b43aec0df75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`;
  } else if (response === "IN") {
    return `url("https://images.unsplash.com/photo-1592639296346-560c37a0f711?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`;
  } else if (response === "BR") {
    return `url("https://images.unsplash.com/photo-1593854586136-2edae149504c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80")`;
  } else if (response === "GR") {
    return `url("https://images.unsplash.com/photo-1590746197887-4420dda1e540?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80")`;
  } else if (response === "CA") {
    return `url("https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1111&q=80")`;
  } else if (response === "IS") {
    return `url("https://images.unsplash.com/photo-1491466424936-e304919aada7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80")`;
  } else if (response === "CZ") {
    return `url("https://images.unsplash.com/photo-1600623471616-8c1966c91ff6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`;
  } else if (response === "SK") {
    return `url("https://images.unsplash.com/photo-1622132593007-7a8f29def34d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`;
  } else if (response === "AT") {
    return `url("https://images.unsplash.com/photo-1609856878074-cf31e21ccb6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1040&q=80")`;
  } else if (response === "HU") {
    return `url("https://images.unsplash.com/photo-1565426873118-a17ed65d74b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80")`;
  } else if (response === "BG") {
    return `url("https://images.unsplash.com/photo-1601152888642-f2f1b5ee0ca2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80")`;
  } else if (response === "HR") {
    return `url("https://images.unsplash.com/photo-1555990793-da11153b2473?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80")`;
  } else if (response === "NL") {
    return `url("https://images.unsplash.com/photo-1536880756060-98a6a140f0a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`;
  } else if (response === "DK") {
    return `url("https://images.unsplash.com/photo-1561113500-8f4ad4f80a93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`;
  } else if (response === "BE") {
    return `url("https://images.unsplash.com/photo-1626013969117-8c13864fdb2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`;
  } else if (response === "NO") {
    return `url("https://images.unsplash.com/photo-1561794047-cc8f58725bdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`;
  } else if (response === "LT") {
    return `url("https://images.unsplash.com/photo-1601150404820-51f8fb87a784?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`;
  } else if (response === "LV") {
    return `url("https://images.unsplash.com/photo-1608931788235-d575cfe5bdf8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80")`;
  } else if (response === "EE") {
    return `url("https://images.unsplash.com/photo-1548267839-d1f27b83b6d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`;
  } else if (response === "LU") {
    return `url("https://images.unsplash.com/photo-1592571169485-cda6ca8a05ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`;
  } else if (response === "MC") {
    return `url("https://images.unsplash.com/photo-1581819896533-f8ab6767ce7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1201&q=80")`;
  } else if (response === "SI") {
    return `url("https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`;
  } else if (response === "ME") {
    return `url("https://images.unsplash.com/photo-1558604185-c2af075c7f1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80")`;
  } else if (response === "BA") {
    return `url("https://images.unsplash.com/photo-1513034751734-9f02f697ac3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80")`;
  } else if (response === "AL") {
    return `url("https://images.unsplash.com/photo-1623167428954-be47340e0812?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`;
  } else if (response === "TR") {
    return `url("https://images.unsplash.com/photo-1627933577672-d191b77baa9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`;
  } else if (response === "OM") {
    return `url("https://images.unsplash.com/photo-1621680696874-edd80ce57b72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1291&q=80")`;
  } else if (response === "VN") {
    return `url("https://images.unsplash.com/photo-1561461221-959c3f16234b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`;
  } else if (response === "UA") {
    return `url("https://images.unsplash.com/photo-1543298782-32907da49e94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80")`;
  } else {
    return `url("https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`;
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
  celsiusTemperature = response.data.main.temp;
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
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperature.innerHTML = Math.round(fahrenheitTemperature);
}
function changeToCelcius(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let temperature = document.querySelector("#how-many-degrees");
  temperature.innerHTML = Math.round(celsiusTemperature);
}
let celsiusTemperature = null;

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

searchCity("San Francisco");
displayForecast();
