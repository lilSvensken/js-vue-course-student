function setToDo() {
    const mainDiv = document.querySelector('.to-do__main');
    const tasksDiv = document.querySelector('.to-do__tasks');

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.classList.add('form-control', 'form-control-lg');

    const addButton = document.createElement('button');
    addButton.textContent = 'Добавить в план';
    addButton.classList.add('btn', 'btn-danger');
    addButton.addEventListener('click', function () {
        if (input.value) {
            const taskSpan = document.createElement('span');
            taskSpan.textContent = input.value;
            taskSpan.dataset.type = 'planned';
            taskSpan.addEventListener('click', function () {
                this.remove();
            });
            tasksDiv.appendChild(taskSpan);
            input.value = '';
        }
    });

    const completedButton = document.createElement('button');
    completedButton.textContent = 'Добавить в сделанные';
    completedButton.classList.add('btn', 'btn-success');
    completedButton.addEventListener('click', function () {
        if (input.value) {
            const taskSpan = document.createElement('span');
            taskSpan.textContent = input.value;
            taskSpan.dataset.type = 'completed';
            taskSpan.addEventListener('click', function () {
                this.remove();
            });
            tasksDiv.appendChild(taskSpan);
            input.value = '';
        }
    });

    mainDiv.appendChild(input);
    mainDiv.appendChild(addButton);
    mainDiv.appendChild(completedButton);
}

export default setToDo;