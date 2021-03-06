// Variables
const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('.todo-input');
const list = document.querySelector('.todo-items');

let todos = [];

// Add eventlistener to submit button
todoForm.addEventListener('submit', function (event) {
    event.preventDefault();
    addTodo(todoInput.value);
});

function addTodo(item) {
    // If input is not '', create todo
    if (item !== '') {
        const todo = {
            id: Date.now(),
            name: item,
            completed: false
        };

        // Add todo to todos array and update to local storage
        todos.push(todo);
        addToLocalStorage(todos);

        // Clear input
        todoInput.value = '';
    }
}

function renderTodos(todos) {
    // Clear list
    list.innerHTML = '';

    todos.forEach(function (item) {
        // Check if task is completed
        const checked = item.completed ? 'checked' : 'in-progress';

        // Create <li> element
        const li = document.createElement('li');
        li.setAttribute('class', 'item');
        li.setAttribute('data-key', item.id);
        /*             if (item.completed === true) {
                    li.classList.add('checked');
                } */

        li.innerHTML = `            
        <span class="todo ${checked}">${item.name}</span>
        <i class="far fa-trash-alt delete-button"></i>
        `;

        // Add <li> element to <ul>
        list.append(li);
    });
}

// Add todo list to local storage and update list on page
function addToLocalStorage(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos(todos);
}

// Get todo list from local storage and update list on page
function getFromLocalStorage() {
    const ref = localStorage.getItem('todos');
    if (ref) {
        todos = JSON.parse(ref);
        renderTodos(todos);
    }
}

function toggle(id) {
    // Change status of completed
    todos.forEach(function (item) {
        if (item.id == id) {
            item.completed = !item.completed;
        }
    });

    // Update local storage
    addToLocalStorage(todos);
}

function deleteTodo(id) {
    // Filter out <li> with id
    todos = todos.filter(function (item) {
        return item.id != id;
    });

    // Update local storage
    addToLocalStorage(todos);
}

// Add event listener to list item and delete button
list.addEventListener('click', function (event) {
    if (event.target.classList.contains('todo')) {
        toggle(event.target.parentElement.getAttribute('data-key'));
    }
    if (event.target.classList.contains('delete-button')) {
        deleteTodo(event.target.parentElement.getAttribute('data-key'));
    }
})

// Get to-do list from local storage when page is ready
$(document).ready(() => {
    getFromLocalStorage();
});