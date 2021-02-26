const form = document.querySelector(".form");
const input = form.querySelector("input");
const welcome = document.querySelector(".welcome");
const checkout = document.querySelector(".checkout");
const toDoContainer = document.querySelector(".toDoContainer");

const USER_LS = "currentUser";
const SHOW_ON = "displayShow";
const SHOW_OFF = "displayNone";

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);

    if(currentUser === null){
        askForName();
        
    }

    else {
        showWelcome(currentUser);
    }
}

function askForName(){
    form.classList.remove(SHOW_OFF);
    welcome.classList.add(SHOW_OFF);
    checkout.classList.add(SHOW_OFF);
    toDoContainer.classList.add(SHOW_OFF);

    form.addEventListener("submit", handleSubmit);

}
    

function showWelcome(user){  
    welcome.innerText = `반가워요 ${user}님!`;
    checkout.innerText = `혹시 ${user}님이 아니신가요?`;

    form.classList.add(SHOW_OFF);
    welcome.classList.remove(SHOW_OFF);
    checkout.classList.remove(SHOW_OFF);
    toDoContainer.classList.remove(SHOW_OFF);

    checkout.addEventListener("click", handleClick);
}

function handleSubmit(event) {
    event.preventDefault();
    
    const currentValue = input.value;
    localStorage.setItem(USER_LS, currentValue);

    showWelcome(currentValue);
}
    
function handleClick(event) {
    event.preventDefault();
    localStorage.removeItem(USER_LS);
    
    form.classList.remove(SHOW_OFF);
    welcome.classList.add(SHOW_OFF);
    checkout.classList.add(SHOW_OFF);
    toDoContainer.classList.add(SHOW_OFF);

    input.value = "";
}


function Init(){
    loadName();
}

Init();