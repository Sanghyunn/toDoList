const clockContainer = document.querySelector(".clock");
const clockTitle = clockContainer.querySelector("h1");


function loadDate(){
    const date = new Date();

    const Today = {
        hours : date.getHours() ,
        minutes : date.getMinutes() ,
        seconds : date.getSeconds()
    }

    showDate(Today);
}

function showDate(Today){
    clockTitle.innerText = `${
        Today.hours }시 ${
        Today.minutes < 10 ? `0${Today.minutes}` : Today.minutes }분 ${
        Today.seconds < 10 ? `0${Today.seconds}` : Today.seconds }초 `;
}

function Init(){
    loadDate();
	setInterval(loadDate, 1000);
}

Init();
