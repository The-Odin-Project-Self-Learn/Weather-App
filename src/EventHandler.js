import { loadCurrentForecast } from "./CurrentForecastUI";
import { loadHomePage } from "./HomeUI";
import { placeSearchField } from "./NavbarUI";
import { processInput, weatherData } from "./SearchController";

function handleEvents() {
    const searchButton = document.getElementById('search-button');
    const homeButton = document.getElementById('home-button');

    if (searchButton) {
        searchButton.addEventListener('click', () => {placeSearchField();});
    }

    if (homeButton) {
        homeButton.addEventListener('click', () => {loadHomePage();});
    }
    
    //if a search icon is clicked, process the search and load the current forecast for that location
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('search-icon')) {
            processInput(event);
            loadCurrentForecast(weatherData);
        }
    });
}

export {handleEvents};
