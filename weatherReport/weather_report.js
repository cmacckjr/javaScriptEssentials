function showWeatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById("city").value;
    const apiKey = "bf69a8c6d742183c49214053a514aea1";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    // Initiates an asynchronous HTTP request to the specified apiUrl (OpenWeatherMap API to retrieve weather data)
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                              <p>Temperature: ${data.main.temp} &#8451;</p>
                              <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
    });
}

document.getElementById('weatherForm').addEventListener('submit',showWeatherDetails);