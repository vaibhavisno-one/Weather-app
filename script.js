const apiKey ="38ccfb14552f3ed944d2f1b2d9656f9a"
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon')
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (!response.ok) {
        // Handle the error if the response is not successful
        alert("City not found or API error.Please spell the city correctly");
        return;
    }

    const data = await response.json();
    console.log(data);

    if (data.main && data.main.temp) {
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector('.humidity').innerHTML = data.main.humidity + ' %';
        document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = './assets/png/clouds.png';

        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = './assets/png/clear.png';
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = './assets/png/rain.png';
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = './assets/png/drizzle.png';
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = './assets/png/mist.png';
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src = './assets/png/snow.png';
        }

        document.querySelector('.weather').style.display ="block"
            
    } else {
        alert("Weather data unavailable for this location.");
    }
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value)

})
