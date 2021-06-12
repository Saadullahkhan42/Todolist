const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');

//function
let addTodo = (e) =>{
    e.preventDefault();
    //Div create
    const divTodo = document.createElement('div');
    divTodo.classList.add('todo');
    
    //Li create
    const divLi = document.createElement('li');
    divLi.innerText=todoInput.value;
    divLi.classList.add('todo-li');
    divTodo.appendChild(divLi);
    
    //check Btn
    const checkBtn = document.createElement('button');
    checkBtn.innerHTML=`<i class="fal fa-check"></i>`;
    checkBtn.classList.add('check-btn');
    divTodo.appendChild(checkBtn);

    //trash Btn
    const trashBtn = document.createElement('button');
    trashBtn.innerHTML= `<i class="fal fa-trash"></i>`;
    trashBtn.classList.add('trash-btn');
    divTodo.appendChild(trashBtn);

    //Combine all in one
    todoList.appendChild(divTodo);
};

//Delete Check
let deleteCheck = (e) =>{
    const item = e.target;
    if(item.classList[0] === "trash-btn"){
        const todoParent = item.parentElement;
        todoParent.classList.add("fall");
        todoParent.addEventListener("transitionend", ()=>{
            todoParent.remove();
        })
        
    }

    //check button
    if(item.classList[0] === "check-btn"){
        const todoParent = item.parentElement;
        todoParent.classList.toggle('completed',() => {
            todoParent.remove();
        });
    }
};

// Event
todoBtn.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);