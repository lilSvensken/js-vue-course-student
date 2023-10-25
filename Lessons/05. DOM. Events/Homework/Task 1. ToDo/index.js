const setToDo = () => {
    const toDoMain = document.querySelector('.to-do__main');
    const toDoMainInputText = document.createElement('input');
    toDoMainInputText.type = 'text';
    toDoMainInputText.classList.add('form-control', 'form-control-lg');
    const btnDanger = document.createElement('button');
    btnDanger.classList.add('btn', 'btn-danger');
    btnDanger.textContent = 'Добавить в план';
    const btnSuccess = document.createElement('button');
    btnSuccess.classList.add('btn', 'btn-success');
    btnSuccess.textContent = 'Добавить в сделанные';
    toDoMain.append(toDoMainInputText, btnDanger, btnSuccess);
    const tasks = document.querySelector('.to-do__tasks');
    btnDanger.addEventListener('click', (event) => {
        if (toDoMainInputText.value === '') {
            alert('Ничего не написано');
        } else {
            let span = document.createElement('span');
            span.appendChild(document.createTextNode(toDoMainInputText.value));
            span.dataset.type = 'planned';
            span.addEventListener('click', (event) => {
                span.remove();
            })
            tasks.appendChild(span);
            toDoMainInputText.value = '';
        }
    })
    btnSuccess.addEventListener('click', (event) => {
        if (toDoMainInputText.value === '') {
            alert('Ничего не написано');
        }else {
            let span = document.createElement('span');
            span.appendChild(document.createTextNode(toDoMainInputText.value));
            span.dataset.type = 'completed';
            span.addEventListener('click', (event) => {
            span.remove();
        })
            tasks.appendChild(span);
            toDoMainInputText.value = '';
        }
    })
};

export default setToDo;