import { loadHomePage, placeSearchField } from "./HomeUI";

function handleEvents() {
    const searchButton = document.getElementById('search-button');
    const homeButton = document.getElementById('home-button');

    if (searchButton) {
        searchButton.addEventListener('click', () => {placeSearchField();});
    }

    if (homeButton) {
        homeButton.addEventListener('click', () => {loadHomePage();});
    }
}

export {handleEvents};
