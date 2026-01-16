function searchForCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
}

let searchEngine = document.querySelector("#search-form");
searchEngine.addEventListener("submit", searchForCity);
