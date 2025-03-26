function createInput() {
    const inputField = document.createElement('input');
    inputField.classList.add('inputField');
    inputField.type = "text";
    return inputField;
}

function createSearchIcon() {
    const searchIcon = document.createElement('img');
    searchIcon.classList.add('icon');
    searchIcon.src = './assets/line-md_search.svg';
    return searchIcon;
}


function clearMainContainer() {
    const mainContainer = document.getElementById('main-container');
    mainContainer.textContent = '';
}

export {createInput, createSearchIcon, clearMainContainer};