const input = document.getElementById('todoInput');
const addTaskButton = document.getElementById('addTask');
const todoList = document.getElementById('todoList');

addTaskButton.addEventListener('click', () => {
    const taskText = input.value.trim();
    if (taskText !== "") {
        const li = document.createElement('li');
        li.textContent = taskText;
        todoList.appendChild(li);
        input.value = ''; // Clear input field after adding
    }
});
