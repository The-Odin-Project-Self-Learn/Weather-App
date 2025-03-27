import { queryAPI } from "./API";

const weatherData = {};

/*
Takes info from input field, sends to API module, and gets back JSON data from API
*/
async function processInput(event) {
    let jsonData = '';
    const clickedSearchIcon = event.target;

    //collect data from the corresponding form
    if (clickedSearchIcon.id == 'homepage-input-icon') {
        const inputField = document.getElementById('homepage-input');
        jsonData = await queryAPI(inputField.value);

    } else if (clickedSearchIcon.id == 'search-button-input-icon') {
        const inputField = document.getElementById('search-button-input');
        jsonData = await queryAPI(inputField.value);
    }

    extractData(jsonData);
}

/* 
Extracts and adds necessary data to weatherData object once data comes in from API
*/
function extractData(jsonData) {
    weatherData.conditions = jsonData.currentConditions.conditions;

    console.log(weatherData);
}



export {processInput, weatherData};