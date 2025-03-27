import { clearMainContainer } from "./DomUtils";


function loadCurrentForecast(weatherData) {
    clearMainContainer();
    console.log("loading current forecast...");
    const random = weatherData;
    return random;
}


export {loadCurrentForecast};