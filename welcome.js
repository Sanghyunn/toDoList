const form = document.querySelector(".form");
const input = form.querySelector("input");
const welcome = document.querySelector(".welcome");
const checkout = document.querySelector(".checkout");
const toDoContainer = document.querySelector(".toDoContainer");

let USER_NAME = "";
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

    form.addEventListener("submit", handleSubmit); // 체크인

}
    

function showWelcome(user){  
    welcome.innerText = `반가워요 ${user}님!`;
    checkout.innerText = `혹시 ${user}님이 아니신가요?`;

    form.classList.add(SHOW_OFF);
    welcome.classList.remove(SHOW_OFF);
    checkout.classList.remove(SHOW_OFF);
    toDoContainer.classList.remove(SHOW_OFF);

    checkout.addEventListener("click", handleClick); // 다른 사용자로 전환
}

function handleSubmit(event) {
    event.preventDefault();
    
    const currentValue = input.value;
    localStorage.setItem(USER_LS, currentValue);

    showWelcome(currentValue);

    USER_NAME = currentValue;
    loadToDos();
}
    
function handleClick(event) {
    event.preventDefault();
    localStorage.removeItem(USER_LS);
    
    form.classList.remove(SHOW_OFF);
    welcome.classList.add(SHOW_OFF);
    checkout.classList.add(SHOW_OFF);
    toDoContainer.classList.add(SHOW_OFF);

    input.value = "";

    
    if(localStorage.getItem(USER_NAME).length === 2) localStorage.removeItem(USER_NAME); 
    /* USER의 toDoList가 비었을 때 Checkout을 할 경우 해당 toDoList 삭제
        if 해당값을 2로 설정한 이유는 Object이 Empty일 때 length 값이 2로 나오기 때문 */

    
    USER_NAME = "";

    while(toDoList.firstChild){
        toDoList.removeChild(toDoList.lastChild);
    }
    /* 화면에 표시되는 요소들 삭제. 삭제안할 시 다른 User로 체크인 했을 때 중복으로 toDoList 요소가 화면에 표시되고 localStorage에도 중복으로 저장됨 */

    toDos = [];

}


function Init(){
    loadName();
}

Init();