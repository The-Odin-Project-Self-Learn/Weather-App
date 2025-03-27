async function queryAPI(inputText) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${inputText}?unitGroup=us&key=GBJDQ7ARSPD829EHZ9THQDTJ5&contentType=json`);
        const jsonData = await response.json();
        console.log(jsonData);
        return jsonData;
    } catch {
        console.log("error caught");
    }
}

export {queryAPI};