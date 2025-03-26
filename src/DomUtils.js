import searchIconPath from './assets/line-md_search.svg';

function createInput() {
    const inputField = document.createElement('input');
    inputField.classList.add('inputField');
    inputField.type = "text";
    return inputField;
}

function createSearchIcon() {
    const searchIcon = document.createElement('img');
    searchIcon.classList.add('icon');
    searchIcon.src = searchIconPath;
    return searchIcon;
}

function createInputAndIconContainer() {
    const inputAndIconContainer = document.createElement('div');
    inputAndIconContainer.classList.add("input-and-icon-container");
    return inputAndIconContainer;
}


function clearMainContainer() {
    const mainContainer = document.getElementById('main-container');
    mainContainer.textContent = '';
}

export {createInput, createSearchIcon, createInputAndIconContainer, clearMainContainer};