const setToDo = () => {
    const main = document.querySelector(".to-do__main");
    const tasksList = document.querySelector(".to-do__tasks");

    const input = document.createElement('input');
    input.classList.add('form-control', 'form-control-lg');
    input.type = 'text';
    input.placeholder = 'Введите наименование задачи';
    main.append(input);

    const buttonPlanned = document.createElement('button');
    buttonPlanned.classList.add('btn', 'btn-danger');
    buttonPlanned.textContent = 'Добавить в план';

    const buttonSuccess = document.createElement('button');
    buttonSuccess.classList.add('btn', 'btn-success');
    buttonSuccess.textContent = 'Добавить в сделанные';

    const buttonListener = (element, type) => {
        element.addEventListener('click', ()=>{
            const taskElement = document.createElement('span');
            taskElement.dataset.type = type;
            taskElement.textContent = input.value;
            taskElement.addEventListener('click', ()=>{
                taskElement.remove();
            });
            input.value='';
            tasksList.append(taskElement);
        })
    }
    buttonListener(buttonPlanned, 'planned');
    buttonListener(buttonSuccess, 'completed');

    main.append(buttonPlanned);
    main.append(buttonSuccess);
};


export default setToDo;