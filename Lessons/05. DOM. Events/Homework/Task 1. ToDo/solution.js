const setToDo = () => {
    // Начало
    const main = document.querySelector('.to-do__main');
    const tasksContainer = document.querySelector('.to-do__tasks');

    const input = document.createElement('input');
    input.classList.add('form-control', 'form-control-lg');
    input.type = 'text';
    input.placeholder = 'Введите наименование задачи';
    main.append(input);

    const addListener = (element, type) => {
        element.addEventListener('click', () => {
            const taskElement = document.createElement('span');
            const taskText = input.value;
            taskElement.dataset.type = type;
            taskElement.textContent = taskText;
            taskElement.addEventListener('click', () => {
                taskElement.remove();
            });

            input.value = '';
            tasksContainer.append(taskElement);
        });
    };


    // Конец
};

export default setToDo;