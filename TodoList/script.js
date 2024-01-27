const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <button class="delete-button" onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}

taskList.addEventListener('click', function(event) {
    const target = event.target;
    if (target.tagName === 'SPAN') {
        target.classList.toggle('completed');
    }
});
