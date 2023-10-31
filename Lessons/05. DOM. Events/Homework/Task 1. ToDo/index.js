const setToDo = () => {
    // Начало
    const mainDiv = document.querySelector('.to-do');
    const mainInput = document.createElement('input');
    mainInput.setAttribute('type','text');
    mainInput.classList.add('form-control','form-control-lg');

    const addButton = document.createElement('button');
    addButton.textContent = 'Добавить в план';
    addButton.classList.add('btn','btn-danger');
    addButton.addEventListener('click',() =>{
        addTask(mainInput.value,'planned');
        mainInput.value = '';
    });

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Добавить в сделанные';
    completeButton.classList.add('btn','btn-success');
    completeButton.addEventListener('click',()=>{
        addTask(mainInput.value,'completed');
        mainInput.value = '';
    });

    const mainDivMain = document.querySelector('.to-do__main');
    mainDivMain.appendChild(mainInput);
    mainDivMain.appendChild(addButton);
    mainDivMain.appendChild(completeButton);

    const  taskDiv = document.querySelector('.to-do__tasks');
    taskDiv.addEventListener('click',(event) => {
        if (event.target.tagName === 'SPAN'){
            event.target.remove();
        }
    });

    function addTask(taskName,taskType){
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskName;
        taskSpan.setAttribute('data-type',taskType);
        taskDiv.appendChild(taskSpan);
    }
};

export default setToDo;