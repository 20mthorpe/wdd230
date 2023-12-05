
const currentWeather = document.querySelector('#currentweather');
const weatherIcon = document.querySelector('#weathericon');
const threeday = document.querySelector('#threeday');
    
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=41.0896&lon=-112.0639&appid=9154e747c1885dfaeb00fd30637c9ba2&units=imperial';
const urlDaily = 'https://api.openweathermap.org/data/2.5/forecast?lat=41.0896&lon=-112.0639&appid=9154e747c1885dfaeb00fd30637c9ba2&units=imperial'
    
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
        const data = await response.json();
        //console.log(data);
        displayCurrent(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log('Error fetching data', error);
    }
}

async function apiFetch2() {
    try {
        const response = await fetch(urlDaily);
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
    
function displayCurrent(data) {
    //console.log(data);
    currentWeather.innerHTML = `${data.main.temp}&deg;F - ${data.weather[0].description}`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const description = data.weather[0].description;
    //console.log(iconsrc);
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', `image of ${description}`)
}   

function displayResults(data) {
    //console.log(data);

    const today = data.list[0].main;
    //console.log(today);
    const tomorrow = data.list[6].main;
    const aftermorrow = data.list[14].main;

    threeday.innerHTML = `Today's Average: ${today.temp}&deg;F</br>Tomorrow's Average: ${tomorrow.temp}&deg;F</br>Aftermorrow's Average: ${aftermorrow.temp}&deg;F`;
    
}    

apiFetch();

apiFetch2();


