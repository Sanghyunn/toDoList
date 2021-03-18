const weatherContainer = document.querySelector(".weather");
const COORDS = "coords";
const API_KEY = "60c029b9f56c0a03a29923a71e40e21f";
// weather info : https://api.openweathermap.org/data/2.5/weather?lat=37.555915899999995&lon=127.0400837&appid=60c029b9f56c0a03a29923a71e40e21f

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude, // 객체의 key 명과 변수 명을 동일하게 입력
        longitude
    }

    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log("Fail to get position :(")
}



function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}

function getWeather(latitude, longitude){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weatherContainer.innerText = `${temperature}'C ${place}`;
    });
    

}

function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);

    if(loadedCords === null){
        askForCoords();
    }

    else {
        const parsedCoords = JSON.parse(loadedCords);
        
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function Init(){
    loadCoords();
} 


Init();