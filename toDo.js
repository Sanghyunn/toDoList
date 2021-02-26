const toDoForm = toDoContainer.querySelector(".toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = toDoContainer.querySelector(".toDoList");

const TODOS_LS = "toDos";

let toDos = [];


function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
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
   // console.log(cleanToDos);

    saveToDos();

}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function findEmptyId(){
    let tempId = 1;
    for(let i = 0; i < toDos.length; i++){
        
        if(tempId === toDos[i].id) {tempId++; i = 0;}
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
    toDoForm.addEventListener("submit", handleSubmit)
}

Init();