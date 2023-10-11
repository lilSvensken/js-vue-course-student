const setToDo = () => {
    // Начало
    const main = document.querySelector('.to-do');
    const tasks = document.querySelector('.to-do__tasks');
    const input = document.querySelector('.to-do__main__input');
    const button1 = document.querySelector('.to-do__main__button-planned');
    const button2 = document.querySelector('.to-do__main__button-completed');


    button1.addEventListener('click', () => {
        const taskElement = document.createElement('span');
        const taskText = input.value;
        if (taskText === '') {
            return;
        }
        taskElement.dataset.type = 'planned';
        taskElement.textContent = taskText;
        tasks.append(taskElement);
        input.value = '';
    });

    button2.addEventListener('click', () => {
        const taskElement = document.createElement('span');
        const taskText = input.value;
        if (taskText === '') {
            return;
        }
        taskElement.dataset.type = 'completed';
        taskElement.textContent = taskText;
        tasks.append(taskElement);
        input.value = '';
    });

    tasks.addEventListener('click', (event) => {
        event.target.remove()
    })
    // Конец
};

export default setToDo;