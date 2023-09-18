const todoList = document.querySelector('#todo-list');


let arrayOfTodos = [
    ]

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => { 
        arrayOfTodos = json 
        console.log(arrayOfTodos)
    })
}

const logTodos = () => {
  console.log(arrayOfTodos)
}

const populateTodos = () => {
  todoList.innerHTML = '';

  for (let i = 0; i < arrayOfTodos.length; i++) {
    let li = document.createElement('li');
    li.textContent = arrayOfTodos[i].title;
    //console.log(li)
    todoList.appendChild(li)
; }
}

