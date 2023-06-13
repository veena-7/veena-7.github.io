window.addEventListener('load', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getWeather);
    } else {
        alert('Geolocation is not supported by this browser.');
    }
});

function getWeather(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=00f5d080966608b3e192e844fa5e8735`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.log('Error:', error);
        });
}

function displayWeather(data) {
    const location = data.name;
    const temperature = Math.round(data.main.temp - 273.15);
    const description = data.weather[0].description;

    document.getElementById('location').textContent = location;
    document.getElementById('temperature').textContent = temperature + '°C';
    document.getElementById('description').textContent = description;
}
