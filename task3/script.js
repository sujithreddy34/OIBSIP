const todoInput=document.querySelector('.todo-input');
const todoButton=document.querySelector('.todo-button');
const todoList=document.querySelector('.todo-list');


todoButton.addEventListener('click',addTodo);

todoList.addEventListener('click',deleteT);


function addTodo(event){
    event.preventDefault();
    // console.log(event)

    const todoDiv=document.createElement('div')
    todoDiv.classList.add('todo');

    const newTodo=document.createElement('li');
    newTodo.innerHTML=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo)


    const completedButton=document.createElement('button');
    completedButton.innerHTML='<i class="fa-solid fa-square-check"></i>';

    completedButton.classList.add('completed-btn');
    todoDiv.appendChild(completedButton)


    const trashButton=document.createElement('button');
    trashButton.innerHTML='<i class="fa-solid fa-square-minus"></i>';

    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton)



todoList.appendChild(todoDiv)

todoInput.value="";
}
function deleteT(e){
    console.log(e.target)
    const item=e.target;
    if(item.classList[0]==='trash-btn'){
    item.parentElement.remove();
    }
    
    if(item.classList[0]==="completed-btn"){
        const todo=item.parentElement;
        todo.classList.toggle('completed')
    }

}