import { clearMainContainer } from "./DomUtils";

const mainContainer = document.getElementById('main-container');

function loadCurrentForecast(weatherData) {
    clearMainContainer();
    console.log("loading current forecast...");

    mainContainer.classList.remove('centered');
    mainContainer.classList.add('top-aligned');
    
    const locationContainer = document.createElement('div');
    locationContainer.id = "location-container";
    const locationName = document.createElement('h2');
    locationName.id = "location-name";
    locationName.textContent = weatherData.address;

    const datetime = document.createElement('h3');
    datetime.id = 'datetime';
    datetime.textContent = weatherData.datetime;

    locationContainer.appendChild(locationName);
    mainContainer.appendChild(locationContainer);
    mainContainer.appendChild(datetime);
}


export {loadCurrentForecast};