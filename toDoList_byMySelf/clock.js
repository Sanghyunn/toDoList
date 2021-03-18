const clock = document.querySelector(".clock");
const clockTitle = clock.querySelector("h1");


function getTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    clockTitle.innerText = `${hours}:${
        minutes < 10 ? `0${minutes}` :`${minutes}`}:${
        seconds < 10 ? `0${seconds}` : `${seconds}`}`;


}
function Init(){
    getTime();
    setInterval(getTime, 1000);
}

Init();