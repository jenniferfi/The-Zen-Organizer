// Variables
const notificationEl = document.querySelector('.notification');
const iconEl = document.querySelector('.weather-icon');
const tempEl = document.querySelector('.temp p');
const descEl = document.querySelector('.description');
const locationEl = document.querySelector('.location');

// Fetch weather from OpenWeather
function fetchWeather() {

    // Use geolocation to locate user
    navigator.geolocation.getCurrentPosition(success, error);

    // Use users location
    function success(position) {
        lat = position.coords.latitude;
        lon = position.coords.longitude;

        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`)
            .then(data => {
                return data.json();
            })
            .then(displayWeather);
    }

    // Use Helsinki as default
    function error() {
        notificationEl.innerHTML = "Unable to retrieve your location. Here, have Helsinki's weather instead."

        let lat = 60.1695;
        let lon = 24.9355;

        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`)
            .then(data => {
                return data.json();
            })
            .then(displayWeather);
    }
}

// Display weather on page
function displayWeather(data) {

    let iconId = data.weather[0].icon;
    let temperature = Math.round(data.main.temp);
    let desc = data.weather[0].description;
    let description = desc.charAt(0).toUpperCase() + desc.slice(1);
    let city = data.name;
    let country = data.sys.country;

    iconEl.innerHTML = `<img src="resources/icons/${weatherIcon[iconId]}.svg"/>`;
    tempEl.innerHTML = `${temperature}&#176;<span>C</span>`;
    descEl.innerHTML = description;
    locationEl.innerHTML = `${city} <span>${country}</span>`;
}

// Call weather function
$(document).ready(() => {
    fetchWeather();
});