const todoList = document.querySelector('#todo-list');
const filterForm = document.getElementById('filterForm');
const filterInput = document.getElementById('filterInput');
const completedCheckbox = document.getElementById('completedCheckbox');


let arrayOfTodos = [
    ];


const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => { 
        arrayOfTodos = json 
        console.log(arrayOfTodos)
    })
};


const logTodos = () => {
  console.log(arrayOfTodos)
};


const populateTodos = () => {
  todoList.innerHTML = '';

  for (let i = 0; i < arrayOfTodos.length; i++) {
    let li = document.createElement('li');

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = arrayOfTodos[i].completed;

    let label = document.createElement('label');
    li.textContent = arrayOfTodos[i].title;
    
    todoList.appendChild(checkbox);
    todoList.appendChild(li);    
 }
};



const clearTodos = () => {
  
     const squares = document.getElementsByTagName("ol")
    
    for (i=0; i < squares.length; i++) {
  
      console.log(squares[i].id)
  
      squares[i].innerHTML = null
    }
};



filterForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const userId = parseInt(filterInput.value);
  const showCompleted = completedCheckbox.checked;
  
  const filteredTodos = arrayOfTodos.filter(function(todo) {
    return todo.userId === userId && (showCompleted ? todo.completed : !todo.completed);
  });
  
  displayTodos(filteredTodos);
});

function displayTodos(todos) {
  todoList.innerHTML = '';
  
  todos.forEach(function(todo) {
    const li = document.createElement('li');
    li.textContent = todo.title;
    todoList.appendChild(li);
  });
}