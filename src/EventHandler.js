//import { loadCurrentForecast } from "./CurrentForecastUI";
import { loadCurrentForecast } from "./CurrentForecastUI";
import { loadHomePage } from "./HomeUI";
import { placeSearchField } from "./NavbarUI";
import { processInput } from "./SearchController";

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
            processInput(event)
            .then(weatherData => {
                if (!weatherData) {return;}
                loadCurrentForecast(weatherData);
            })
            .catch((error) => {
                console.log(error);
                alert('Invalid location!');
            });
        }
    });
}

export {handleEvents};
