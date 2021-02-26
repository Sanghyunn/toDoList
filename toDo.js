const toDoForm = toDoContainer.querySelector(".toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = toDoContainer.querySelector(".toDoList");

let toDos = [];


function loadToDos(){
    USER_NAME = localStorage.getItem(USER_LS);
    const loadedToDos = localStorage.getItem(USER_NAME);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            showToDo(toDo.text);
        });
    }
}


function deleteToDo(event){
    const li = event.target.parentNode;
    toDoList.removeChild(li);
    
    const cleanToDos = toDos.filter(function(toDo) {
        return parseInt(li.id) !== toDo.id;
    });
    
    toDos = cleanToDos;

    saveToDos();


}

function saveToDos(){
    localStorage.setItem(USER_NAME, JSON.stringify(toDos));
}

function findEmptyId(){
    let tempId = 1;
    for(let i = 0; i < toDos.length; i++){
        
        if(tempId === toDos[i].id) {tempId++; i = 0;} // 중복 id 발견 시 id의 숫자를 1 증가시키고 중복 id가 없을때까지 for문 반복을 돌린다.
    }

    return tempId;
}


function showToDo(text){
    const li = document.createElement("li");
    const xBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = findEmptyId();
    
    xBtn.innerText = "❌";
    xBtn.addEventListener("click", deleteToDo); 
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(xBtn);
    li.id = newId;
    toDoList.appendChild(li); 

    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);

    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    showToDo(currentValue);
    toDoInput.value = "";
}

function Init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);

}

Init();