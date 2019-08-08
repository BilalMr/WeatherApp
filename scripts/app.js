// For DOM Manipulation and Event handling


const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) =>{
    console.log(data);
    const {cityDets, weather} = data;

    // Show the card on the dom
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
    
    // update details template
    details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
    `

    // update the night/day & icon images
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    let timeSrc = null;
    timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg'


    time.setAttribute('src', timeSrc);
}

const updateCity = async (city) =>{
    const cityDets = await getCity(city)
    const weather = await getWeather(cityDets.Key);

    return {
        cityDets,
        weather
    }
}

cityForm.addEventListener('submit', e=>{

    // Get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();


    // Update the ui with the new city
    updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));


    e.preventDefault();
})