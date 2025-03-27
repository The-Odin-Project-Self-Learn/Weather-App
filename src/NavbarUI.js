import { createInputAndIconContainer, createSearchIcon, createInput } from "./DomUtils";

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
        const input = createInput();
        input.id = 'search-button-input';
        inputAndIconContainer.appendChild(input);
        inputAndIconContainer.appendChild(searchIcon);
        searchButton.after(inputAndIconContainer);
    }
}

export {placeSearchField};