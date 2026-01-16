function refreshWeather(response) {
  let cityElement = document.querySelector("#city");
  let temperatureElement = document.querySelector("#current-temperature");
  let countryElement = document.querySelector("#country");
  let weatherConditionText = document.querySelector("#weather-condition");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");

  windElement.innerHTML = Math.round(response.data.wind.speed);
  humidityElement.innerHTML = response.data.temperature.humidity;
  weatherConditionText.innerHTML = response.data.condition.description;
  cityElement.innerHTML = response.data.city;
  countryElement.innerHTML = response.data.country;
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  console.log(response.data);
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
