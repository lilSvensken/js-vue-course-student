const setToDo = () => {
    const main = document.querySelector('.to-do__main');
    const taskStorage = document.querySelector('.to-do__tasks');

    const inputPlace = document.createElement('input');
    inputPlace.classList.add("form-control", "form-control-lg");
    inputPlace.type = "text";
    inputPlace.placeholder = "Введите наименование задачи";
    main.append(inputPlace);

    function adder (element, type){
        element.addEventListener('click', () => {
            const elementOfTask = document.createElement('span');
            const dataOfTask = inputPlace.value;
            elementOfTask.dataset.type = type;
            elementOfTask.textContent = dataOfTask;
            elementOfTask.addEventListener('click', () => {
                elementOfTask.remove();
            });
            taskStorage.append(elementOfTask);
            inputPlace.value = null;

        });
    }

    const buttonPlanned = document.createElement('button');
    buttonPlanned.classList.add('btn', 'btn-danger');
    buttonPlanned.textContent = 'Добавить в план';

    const buttonCompleted = document.createElement('button');
    buttonCompleted.classList.add('btn', 'btn-success');
    buttonCompleted.textContent = 'Добавить в сделанные';

    adder(buttonPlanned, 'planned');
    adder(buttonCompleted, 'completed');

    main.append(buttonPlanned);
    main.append(buttonCompleted);
};

export default setToDo;