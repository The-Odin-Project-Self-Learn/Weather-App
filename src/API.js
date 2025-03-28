async function queryAPI(inputText) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${inputText}?unitGroup=us&key=GBJDQ7ARSPD829EHZ9THQDTJ5&contentType=json`);
    const jsonData = await response.json();
    return jsonData;
    //if fetch() succeeds, Promise.resolve(jsonData) is returned
    //if fetch() fails, Promise.reject(error) is returned
}


async function queryGiphyAPI(queryTerm) {
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=VqotkVOn1dOwDtt32meVLN4Hphtpwp3L&s=${queryTerm}&weirdness=0`);
    const jsonData = await response.json();
    console.log(`Raw GIPHY data: `, jsonData);
    return jsonData;
}


export {queryAPI, queryGiphyAPI};