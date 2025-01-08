const apiKey ="af85aa3fbc299a8ccaac1dac82295b2e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchInput = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
var data = await response.json();
console.log(data);
document.querySelector(".city").innerText = data.name;
document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°C";
document.querySelector(".humidity").innerText = data.main.humidity + "%";
document.querySelector(".wind").innerText = data.wind.speed + "km/h";
if (data.weather[0].main == "Clear") {

    weatherIcon.src = "images/clear.png";
}
else if (data.weather[0].main == "CLouds") {

    weatherIcon.src = "images/cloud.png";
}
else if (data.weather[0].main == "Rain") {

    weatherIcon.src = "images/rain.png";
}
else if (data.weather[0].main == "Drizzle") {

    weatherIcon.src = "images/drizzle.png";
}
else if (data.weather[0].main == "Mist") {

    weatherIcon.src = "images/mist.png";
}
document.querySelector(".weather").style.display = "block";
}
searchButton.addEventListener("click", () =>{
    checkWeather(searchInput.value);
});