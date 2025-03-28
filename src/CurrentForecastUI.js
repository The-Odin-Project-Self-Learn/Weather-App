import { clearMainContainer } from "./DomUtils";
import rainIconPath from './assets/noto_cloud-with-rain.svg';
import { getWeatherGIF } from "./SearchController";

const mainContainer = document.getElementById('main-container');

function loadCurrentForecast(weatherData) {
    clearMainContainer();
    console.log("loading current forecast...");

    mainContainer.classList.remove('centered');
    mainContainer.classList.add('top-aligned');
    
    loadBackground(weatherData.conditions);

    const locationName = document.createElement('h2');
    locationName.id = "location-name";
    locationName.textContent = weatherData.address;

    const datetime = document.createElement('h3');
    datetime.id = 'datetime';
    datetime.textContent = weatherData.datetime;

    const icon = loadIcon(weatherData);

    mainContainer.appendChild(locationName);
    mainContainer.appendChild(datetime);
    mainContainer.appendChild(icon);
}

/*
Retrieves URL of GIF and sets the background accordingly
*/
async function loadBackground(condition) {
    try {
        const url = await getWeatherGIF(condition);
        mainContainer.style.backgroundImage = `url(${url})`;
        mainContainer.style.backgroundSize = 'cover';
        mainContainer.style.backgroundPosition = 'center';

    } catch(error) {
        console.log(error);
        alert('GIF loading error');
    }
}


function loadIcon(weatherData) {
    const icon = document.createElement('img');
    icon.id = 'weather-icon';
    if (weatherData.icon == 'rain') {
        icon.src = rainIconPath;
    }
    return icon;
}


export {loadCurrentForecast};