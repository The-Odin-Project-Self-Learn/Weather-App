import { clearMainContainer, createInput, createSearchIcon } from "./DomUtils";

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
    const inputAndIconContainer = document.createElement('div');
    inputAndIconContainer.id = "input-and-icon-container";

    //create text
    const homepageText = document.createElement('p');
    homepageText.textContent = 'Enter a location to get weather data!';
    homepageText.id = "homepage-text";

    //create input field + button
    const input = createInput();
    const searchIcon = createSearchIcon();

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

}

export {loadHomePage, placeSearchField};