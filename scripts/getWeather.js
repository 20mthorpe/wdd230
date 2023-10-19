fetch("https://api.open-meteo.com/v1/forecast?latitude=41.0894&longitude=-112.0647&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,precipitation,windspeed_10m&daily=uv_index_max&timezone=America%2FDenver&forecast_days=1").then(response => response.json()).then(data => {
    const weather = document.getElementById("weather");
    const temperature = (data.main.temp - 273.15).toFixed(2); // Convert temperature to Celsius
        const description = data.weather[0].description;
        const weatherInfo = `Weather in Syracuse, UT, USA: ${description}. Temperature: ${temperature}°C`;

        weather.textContent = weatherInfo;
    }).catch(error => {
        console.error('Error fetching data from OpenWeatherMap API', error);
    });