const setToDo = () => {
    const main = document.querySelector('.to-do__main');

    const input = document.createElement('input');
    input.classList.add('form-control', 'form-control-lg');
    input.type = 'text';
    input.placeholder = 'Введите наименование задачи';
    main.append(input);

    const buttonDanger = document.createElement('button');
    buttonDanger.classList.add('btn', 'btn-danger');
    buttonDanger.textContent = 'Добавить в план';
    addListener(buttonDanger, 'planned');

    const buttonSuccess = document.createElement('button');
    buttonSuccess.classList.add('btn', 'btn-danger');
    buttonSuccess.textContent = 'Добавить в сделанные';
    addListener(buttonSuccess, 'completed');

    main.append(buttonDanger, buttonSuccess);

    const tasks = document.querySelector('.to-do__tasks');

    function addListener(element, type) {
        element.addEventListener('click', () => {
            const task = document.createElement('span');
            task.textContent = input.value;
            task.dataset.type = type;
            task.addEventListener('click', () => {
                task.remove();
            })
            tasks.append(task);
            input.value = '';
        })
    }
};

export default setToDo;