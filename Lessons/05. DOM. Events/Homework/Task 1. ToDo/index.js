const setToDo = () => {
    // Начало
    const toDO = document.body.querySelector('.to-do__main');
    const taskContainer = document.body.querySelector('.to-do__tasks')

    const info = document.createElement('input')
    info.classList.add('form-control', 'form-control-lg');
    info.type = 'text';
    info.placeholder = 'Введитие наименвание задачи';

    const buttonPlaned = document.createElement('button');
    buttonPlaned.classList.add('btn', 'btn-danger');
    buttonPlaned.textContent = 'Добавить в план';

    const buttonCompleted = document.createElement('button');
    buttonCompleted.classList.add('btn', 'btn-success');
    buttonCompleted.textContent = 'Добавить в сделанные';

    toDO.append(info, buttonPlaned, buttonCompleted);

    const addListener = (element, type) => {
        element.addEventListener('click', () => {
        const elementType = document.createElement('span');
        const text = info.value;
        elementType.dataset.type = type;
        elementType.textContent = text;
            elementType.addEventListener('click', () => {
                elementType.remove();
            });
        info.value = '';
        taskContainer.append(elementType);
        })
    }
    addListener(buttonPlaned, 'planned');
    addListener(buttonCompleted, 'completed');
    // Конец
};

export default setToDo;