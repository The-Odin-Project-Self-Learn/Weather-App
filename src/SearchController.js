import { queryAPI, queryGiphyAPI } from "./API";

const weatherData = {};

/*
Takes info from input field, sends to API module, and retrieves fetched JSON data
*/
async function processInput(event) {
    let jsonData = '';
    let inputField = '';
    const clickedSearchIcon = event.target;

    //collect data from the corresponding form
    if (clickedSearchIcon.id == 'homepage-input-icon') {
        inputField = document.getElementById('homepage-input');

    } else if (clickedSearchIcon.id == 'search-button-input-icon') {
        inputField = document.getElementById('search-button-input');
    }

    jsonData = await queryAPI(inputField.value);
    extractData(jsonData);
    return weatherData;

    //if queryAPI() returns Promise.resolve(jsonData), jsonData variable takes on the value passed from resolve()
    //if queryAPI() returns Promise.reject(error), processInput() will also return a rejected promise with the same error
}

/*
Gets GIF data from API, then returns URL 
*/

async function getWeatherGIF(condition) {
    let queryTerm  = '';
    if (condition == "Partially cloudy") {
        queryTerm = 'cloudy';
    } else if (condition == 'Overcast') {
        queryTerm = 'overcast';
    }
    const jsonData = await queryGiphyAPI(queryTerm);
    const url = jsonData.data.images.original.url;
    return url;
}



/* 
Extracts and adds necessary data to weatherData object once data comes in from API
*/
function extractData(jsonData) {
    weatherData.address = jsonData.resolvedAddress;
    weatherData.conditions = jsonData.currentConditions.conditions;
    weatherData.datetime = jsonData.currentConditions.datetime;
    weatherData.icon = jsonData.currentConditions.icon;
    weatherData.precipprob = jsonData.currentConditions.precipprob;
    weatherData.snow = jsonData.currentConditions.snow;
    weatherData.temp = jsonData.currentConditions.temp;
    weatherData.windspeed = jsonData.currentConditions.windspeed;
    console.log('Necessary data: ', weatherData);
}

export {processInput, getWeatherGIF};