import { clearMainContainer, createInput, createSearchIcon, createInputAndIconContainer } from "./DomUtils";
import { processInput } from "./SearchController";

const mainContainer = document.getElementById('main-container');

function loadHomePage() {
    clearMainContainer();
    placeInputField();
}

/*
Places the main input field in the center of the home page
*/
function placeInputField() {
    //create outermost container
    const outermostContainer = document.createElement('div');
    outermostContainer.id = "outermost-input-container";

    //create container for text and input field
    const innerContainer = document.createElement('div');
    innerContainer.id = "inner-input-container";

    //create container for input field and icon
    const inputAndIconContainer = createInputAndIconContainer();

    //create text
    const homepageText = document.createElement('p');
    homepageText.textContent = 'Enter a location to get weather data!';
    homepageText.id = "homepage-text";

    //create input field + button
    const input = createInput();
    input.id = 'homepage-input';
    const searchIcon = createSearchIcon();
    searchIcon.id = 'homepage-input-icon';
    searchIcon.addEventListener('click', (event) => {
        processInput(event);
    });

    //append everything in order
    inputAndIconContainer.appendChild(input);
    inputAndIconContainer.appendChild(searchIcon);
    innerContainer.appendChild(homepageText);
    innerContainer.appendChild(inputAndIconContainer);
    outermostContainer.appendChild(innerContainer);
    mainContainer.appendChild(outermostContainer);
}

/* 
Places the search input-field underneath the "search" button
*/
function placeSearchField() {
    const searchButton = document.getElementById('search-button');
    const searchButtonInputContainer = document.getElementById('search-button-input-container');

    if (searchButtonInputContainer) {
        searchButtonInputContainer.remove();
    } else {
        const inputAndIconContainer = createInputAndIconContainer();
        inputAndIconContainer.id = 'search-button-input-container';
        const searchIcon = createSearchIcon();
        searchIcon.id = 'search-button-input-icon';
        searchIcon.addEventListener('click', (event) => {
            processInput(event);
        });
        const input = createInput();
        input.id = 'search-button-input';
        inputAndIconContainer.appendChild(input);
        inputAndIconContainer.appendChild(searchIcon);
        searchButton.after(inputAndIconContainer);
    }
}

export {loadHomePage, placeSearchField};