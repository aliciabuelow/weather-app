function refreshWeather(response) {
  let cityElement = document.querySelector("#city");
  let temperatureElement = document.querySelector("#current-temperature");
  let countryElement = document.querySelector("#country");
  let weatherConditionText = document.querySelector("#weather-condition");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateTimeElement = document.querySelector("#date-time");
  let date = new Date(response.data.time * 1000);
  let icon = document.querySelector("#current-temperature-icon");

  icon.innerHTML = `<img src="${response.data.condition.icon_url}" class="current-temperature-icon" />`;
  dateTimeElement.innerHTML = formattedDate(date);
  windElement.innerHTML = Math.round(response.data.wind.speed);
  humidityElement.innerHTML = response.data.temperature.humidity;
  weatherConditionText.innerHTML = response.data.condition.description;
  cityElement.innerHTML = response.data.city;
  countryElement.innerHTML = response.data.country;
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
}

function formattedDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
  let apiKey = "04dbc8004716437tab5bc0bfo1baf277";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(refreshWeather);
}

function submitSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");

  searchCity(searchInput.value);
}

let searchEngine = document.querySelector("#search-form");
searchEngine.addEventListener("submit", submitSearch);

searchCity("Perth");
