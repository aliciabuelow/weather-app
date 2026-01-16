function refreshWeather(response) {
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
  let temperatureElement = document.querySelector("#current-temperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  let countryElement = document.querySelector("#country");
  countryElement.innerHTML = response.data.country;
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
