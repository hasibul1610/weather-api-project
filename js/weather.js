// api key : 88b6727a716d72b9e97e0c2654ad4c97

const loadWeather = () =>{

    const apiKey = "88b6727a716d72b9e97e0c2654ad4c97"
    const searchField = document.getElementById('search-input');
    const searchText = searchField.value ;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&units=metric&appid=${apiKey}`;

    fetch(url)
    .then(res => res.json())
    .then(data => displayWeather(data));
}

const displayWeather = weather =>{
    console.log(weather);
    const weatherResult = document.getElementById('weather-result');
    weatherResult.textContent = '';
    const div = document.createElement('div');
    div.innerHTML = `
        <div class="weather-status text-white text-center">
        <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="">
            <h1>${weather.name}</h1>
            <h3><span>Current Temperature: ${weather.main.temp}</span>&deg;C</h3>
            <h3><span>Feels Like : ${weather.main.feels_like}</span>&deg;C</h3>
            <h3><span>Maximum Temperature : ${weather.main.temp_max}</span>&deg;C</h3>
            <h3><span>Minimum Temperature : ${weather.main.temp_min}</span>&deg;C</h3>
            
        </div>
    `;
    weatherResult.appendChild(div);
}