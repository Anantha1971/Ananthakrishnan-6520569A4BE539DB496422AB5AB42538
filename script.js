document.getElementById('searchButton').addEventListener('click', async () => {
  const city = document.getElementById('cityInput').value;
  try {
    const data = await fetchWeatherData(city);
    displayWeather(data);
  } catch (error) {
    displayError(error.message);
  }
});

function displayWeather(data) {
  const weatherDisplay = document.getElementById('weatherDisplay');
  weatherDisplay.innerHTML = `
    <h2>${data.name}</h2>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Condition: ${data.weather[0].description}</p>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather Icon">
  `;
}

function displayError(message) {
  const weatherDisplay = document.getElementById('weatherDisplay');
  weatherDisplay.innerHTML = `<p>Error: ${message}</p>`;
}
