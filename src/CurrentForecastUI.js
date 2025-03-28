import { clearMainContainer } from "./DomUtils";
//import rainIconPath from './assets/noto_cloud-with-rain.svg';
import { getWeatherGIF } from "./SearchController";

const mainContainer = document.getElementById('main-container');

function loadCurrentForecast(weatherData) {
    clearMainContainer();

    mainContainer.classList.remove('centered');
    mainContainer.classList.add('top-aligned');
    
    loadBackground(weatherData.conditions);

    
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

/*
function loadIcon(weatherData) {
    const icon = document.createElement('img');
    icon.id = 'weather-icon';
    if (weatherData.icon == 'rain') {
        icon.src = rainIconPath;
    }
    return icon;
}
*/


export {loadCurrentForecast};