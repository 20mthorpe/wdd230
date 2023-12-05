//fetch("https://api.open-meteo.com/v1/forecast?latitude=41.0894&longitude=-112.0647&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,precipitation,windspeed_10m&daily=uv_index_max&timezone=America%2FDenver&forecast_days=1").then(response => response.json()).then(data => {
//    const weather = document.getElementById("weather");
//    const temperature = (data.main.temp - 273.15).toFixed(2); // Convert temperature to Celsius
//        const description = data.weather[0].description;
//        const weatherInfo = `Weather in Syracuse, UT, USA: ${description}. Temperature: ${temperature}°C`;
//
//        weather.textContent = weatherInfo;
//    }).catch(error => {
//        console.error('Error fetching data from OpenWeatherMap API', error);
//    });

const currentWeather = document.querySelector('#currentweather');
const weatherIcon = document.querySelector('#weathericon');
    
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=41.0896&lon=-112.0639&appid=9154e747c1885dfaeb00fd30637c9ba2&units=imperial';
    
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
        const data = await response.json();
        //console.log(data);
        displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log('Error fetching data', error);
    }
}
    
function displayResults(data) {
    console.log(data);
    currentWeather.innerHTML = `Current Weather: ${data.main.temp}&deg;F - ${data.weather[0].description}`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const description = data.weather[0].description;
    //console.log(iconsrc);
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', `image of ${description}`)
}      
apiFetch();