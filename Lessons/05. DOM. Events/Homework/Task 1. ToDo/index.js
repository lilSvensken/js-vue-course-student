const setToDo = () => {
    // Начало
    const main = document.querySelector('.to-do__main');
    const tasksContainer = document.querySelector('.to-do__tasks');

    const input = document.createElement('input');
    input.classList.add('form-control', 'form-control-lg');
    input.type = 'text';
    input.placeholder = 'Введите наименование задачи';
    main.append(input);

    const planBtn = document.createElement('button');
    planBtn.classList.add('btn', 'btn-danger');
    planBtn.textContent = 'Добавить в план';

    const completeBtn = document.createElement('button');
    completeBtn.classList.add('btn', 'btn-success');
    completeBtn.textContent = 'Добавить в сделанные';

    var addListener = (element, type) => {
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

    addListener(planBtn, 'planned');
    addListener(completeBtn, 'completed');

    main.append(planBtn);
    main.append(completeBtn);
    // Конец
};

export default setToDo;