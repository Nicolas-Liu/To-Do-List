
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

function addTodo(event){
    //prevent form from submitting
    event.preventDefault();
    console.log('hello world')

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    const newTodo = document.createElement('li')
    newTodo.classList.add('todo-item'); 
    newTodo.innerText =  todoInput.value; 
    todoDiv.appendChild(newTodo);
    //complete button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = "<i class='fas fa-check'><i>" 
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    //trash
    const trashButton = document.createElement('button');
    trashButton.innerHTML = "<i class='fas fa-trash'><i>" 
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv); 
    //clear Todo 
    todoInput.value = "";
}

function deleteCheck(e){
    const item = e.target;
    //delete todo
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        todo.remove();
    }

    //check mark
    if (item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}
