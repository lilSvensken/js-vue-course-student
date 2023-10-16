const setToDo = () => {
    // Начало
    const main = document.querySelector('.to-do__main')
    main.append(input)
    main.append(buttonPlanned)
    main.append(buttonCompleted)
    handler(buttonPlanned,'planned')
    handler(buttonCompleted,'completed')
};
const input = document.createElement('input')
input.type = 'text'
input.placeholder = 'Введите наименование задачи';
input.classList.add('form-control','form-control-lg')

const buttonPlanned = document.createElement('button')
buttonPlanned.classList.add('btn', 'btn-danger');
buttonPlanned.textContent = 'Добавить в план';

const buttonCompleted = document.createElement('button')
buttonCompleted.classList.add('btn', 'btn-success');
buttonCompleted.textContent = 'Добавить в сделанное';
function handler (element, type){
    const tasksList = document.querySelector('.to-do__tasks')
    element.addEventListener('click', () => {
        const task = document.createElement('span')
        task.dataset.type = type
        task.textContent = input.value
        task.addEventListener('click', () => {
            task.remove()
        })
        tasksList.append(task)
        input.value = null
    })
    // Конец
}

export default setToDo;