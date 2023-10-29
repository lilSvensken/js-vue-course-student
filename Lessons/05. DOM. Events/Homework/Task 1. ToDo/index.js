const setToDo = () => {
    // Начало
    const main = document.querySelector('.to-do__main');
    const tasks = document.querySelector('.to-do__tasks');

    const input = document.createElement('input');
    input.classList.add('form-control', 'form-control-lg');
    input.type = 'text';
    input.placeholder = 'Введите наименование задачи';

    const planBtn = document.createElement('button');
    planBtn.classList.add('btn', 'btn-danger');
    planBtn.textContent = 'Добавить в план';

    const completeBtn = document.createElement('button');
    completeBtn.classList.add('btn', 'btn-success');
    completeBtn.textContent = 'Добавить в сделанные';

    const addListener = (element, type) => {
        element.addEventListener('click', () => {
            const task = document.createElement('span');
            const taskText = input.value;
            task.dataset.type = type;
            task.textContent = taskText;
            task.addEventListener('click', () => {
                task.remove();
            });

            input.value = '';
            tasks.append(task);
        });
    };

    addListener(planBtn, 'planned');
    addListener(completeBtn, 'completed');

    main.append(input);
    main.append(planBtn);
    main.append(completeBtn);
    // Конец
};

export default setToDo;