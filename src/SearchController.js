import { queryAPI } from "./API";

const weatherData = {};

/*
Takes info from input field, sends to API module, and retrieves fetched JSON data
*/
async function processInput(event) {
    let jsonData = '';
    const clickedSearchIcon = event.target;

    try {
        //collect data from the corresponding form
        if (clickedSearchIcon.id == 'homepage-input-icon') {
            const inputField = document.getElementById('homepage-input');
            jsonData = await queryAPI(inputField.value);

        } else if (clickedSearchIcon.id == 'search-button-input-icon') {
            const inputField = document.getElementById('search-button-input');
            jsonData = await queryAPI(inputField.value);
        }
        extractData(jsonData);

    } catch {
        console.log('Error retrieving weather data for this location');
    }
}

/* 
Extracts and adds necessary data to weatherData object once data comes in from API
*/
function extractData(jsonData) {
    weatherData.address = jsonData.address;
    weatherData.conditions = jsonData.currentConditions.conditions;
    weatherData.datetime = jsonData.currentConditions.datetime;
    weatherData.icon = jsonData.currentConditions.icon;
    weatherData.precipprob = jsonData.currentConditions.precipprob;
    weatherData.snow = jsonData.currentConditions.snow;
    weatherData.temp = jsonData.currentConditions.temp;
    weatherData.windspeed = jsonData.currentConditions.windspeed;
    console.log('Necessary data: ', weatherData);
}

export {processInput, weatherData};