
const API_KEY = "8aeea10034afbcd209b59d8c1c9d770d";




function onGeoOk(position){
    const lat =position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data =>{
        const weather = document.querySelector(".weather-icon");
        const temp = document.querySelector(".temp");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;

        //weather.innerText = data.weather[0].main;
        if(data.weather[0].main === "Haze"){
            weather.innerText = `<i class="fas fa-smog"></i>`;
        }

        temp.innerText = data.main.temp + " ℃";

        console.log(data.weather[0].main);
    });
}

function onGeoError(){
    alert("No weatehr for you")
;}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);