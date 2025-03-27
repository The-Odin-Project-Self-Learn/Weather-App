import { clearMainContainer, createInput, createSearchIcon, createInputAndIconContainer } from "./DomUtils";

const mainContainer = document.getElementById('main-container');

function loadHomePage() {
    clearMainContainer();
    placeInputField();
}

/*
Places the main input field in the center of the home page
*/
function placeInputField() {
    //center items within main container
    mainContainer.classList.remove('top-aligned');
    mainContainer.classList.add('centered');

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

    //append everything in order
    inputAndIconContainer.appendChild(input);
    inputAndIconContainer.appendChild(searchIcon);
    innerContainer.appendChild(homepageText);
    innerContainer.appendChild(inputAndIconContainer);
    outermostContainer.appendChild(innerContainer);
    mainContainer.appendChild(outermostContainer);
}

export {loadHomePage};