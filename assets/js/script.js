const form = document.getElementById("task-form"); // form recebe o ID do formulário da página
const TaskList = document.getElementById("tasks"); // TaskList recebe o ID da DIV da página.

// Ao submeter o formulário:
form.onsubmit = function (e) {
    e.preventDefault();
    const inputField = document.getElementById('task-input');

    if(inputField.value.length == 0) {
        alert("A tarefa digitada não é uma tarefa!");
    }
    else {
        addTask(inputField.value);
        form.reset();
    }
};

function addTask(description) {
    // Criação dos elementos definidas nas variáveis:
    const taskContainer = document.createElement('div');
    const newTask = document.createElement('input');
    const taskLabel = document.createElement('label');
    const taskDescriptionNode = document.createTextNode(description);

    newTask.setAttribute('type', 'checkbox');
    newTask.setAttribute('name', description);
    newTask.setAttribute('id', description);

    taskLabel.setAttribute('for', description);
    taskLabel.appendChild(taskDescriptionNode);

    taskContainer.classList.add('task-item');
    taskContainer.appendChild(newTask);
    taskContainer.appendChild(taskLabel);

    TaskList.appendChild(taskContainer);
}