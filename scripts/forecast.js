// For API Requests


// API key
const key = 'LfQppPWwAIDm92kMRIp1hbuCK5NlmYSK';


// Get weather information
async function getWeather(id){
    const base = 'https://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
}


// Get city information
async function getCity(city){
    const base ='https://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`
    const reponse = await fetch(`${base}${query}`);
    const data = await reponse.json();
    return data[0];
}




