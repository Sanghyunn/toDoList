const loginForm = document.querySelector(".login");
const nameInput = loginForm.querySelector("input");
const welcome = document.querySelector(".welcome");
const greeting = welcome.querySelector(".greeting");
const checkout = welcome.querySelector(".checkout");

const USER_LS = "currentUser"
const SHOW_OFF = "displayNone"

function askForName(){
    loginForm.classList.remove(SHOW_OFF);
    welcome.classList.add(SHOW_OFF);

    loginForm.addEventListener("submit", handleSubmit);
}

function handleSubmit(event){
 
    event.preventDefault();

    const userName = nameInput.value;
    localStorage.setItem(USER_LS, userName);
    
    nameInput.value = "";

    paintWelcome(userName);
}

function handleCheckout(event){
    localStorage.removeItem(USER_LS);

    greeting.innerText = "";
    checkout.innerText = "";

    askForName();
}

function paintWelcome(currentUser){
    loginForm.classList.add(SHOW_OFF);
    welcome.classList.remove(SHOW_OFF);
    
    const userName = currentUser;

    greeting.innerText = `만나서 반가워요 ${userName}님!`;
    checkout.innerText = `혹시 ${userName}님이 아니신가요?`;

    checkout.addEventListener("click", handleCheckout);
    
}

function Init(){
    const currentUser = localStorage.getItem(USER_LS);

    if(currentUser === null){
        askForName();
    }

    else {
        paintWelcome(currentUser);
    }
}

Init();