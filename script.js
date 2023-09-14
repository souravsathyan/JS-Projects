const apiKey = '7ea3de2c6e4006f143c98685302feef7'
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")
// *if field is empty
if (searchBox.value === "" || typeof searchBox.value === Number) {
    document.querySelector('.error').style.display = "block"
    document.querySelector('.error').innerHTML='Please enter a valid entry'
    document.querySelector('.weather').style.display = 'none'
}

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    var data = await response.json()

    if (response.status === 404) {
        document.querySelector('.error').style.display = "block"
        document.querySelector('.error').innerHTML='Invalid city name'
        document.querySelector('.weather').style.display = 'none'
    } else {
        //* updating the city
        document.querySelector(".city").innerHTML = data.name
        // *updating the tempertaure
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"
        // *updaying the humidity
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
        // *updating the wind
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"

        // * for updating the image
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png"
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png"
        }
        else if (data.weather[0].main == 'Rain') {
            weatherIcon.src = "images/rain.png"
        }
        else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.src = "images/drizzle.png"
        }
        else if (data.weather[0].main == 'Mist') {
            weatherIcon.src = "images/mist.png"
        }
        document.querySelector(".weather").style.display = "block"
        document.querySelector('.error').style.display = "none"
        console.log(data);

    }


}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value)
})