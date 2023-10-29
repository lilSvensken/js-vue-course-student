const setToDo = () => {
    const main =document.querySelector('.to-do__main');
    const tasksContainer = document.querySelector('.to-do__tasks');

    const input = document.createElement('input');
    input.classList.add('form-control', 'form-control-lg');
    input.type = 'text';
    input.placeholder = 'Введите наимаенование';
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
    const planBtn = document.createElement('button');
    planBtn.classList.add('btn', 'btn-danger');
    planBtn.textContent = 'Добавить в план';
    const doneBtn = document.createElement('button');
    doneBtn.classList.add('btn', 'btn-success');
    doneBtn.textContent = 'Добавить в сделанные';

    addListener(planBtn, 'planned');
    addListener(doneBtn, 'completed');

    main.append(planBtn);
    main.append(doneBtn);
};

export default setToDo;