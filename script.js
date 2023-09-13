const apiKey = '7ea3de2c6e4006f143c98685302feef7'
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore`
async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`)
    var data = await response.json()
    console.log(data)
}
checkWeather()