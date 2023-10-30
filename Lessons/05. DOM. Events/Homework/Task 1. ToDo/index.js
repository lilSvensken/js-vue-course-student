const setToDo = () => {
    // Начало
    const main = document.querySelector('.to-do__main');
    const tasks = document.querySelector('.to-do__tasks')

    const nameInput = document.createElement('input');
    nameInput.classList.add('form-control', 'form-control-lg');

    const planButton = document.createElement('button');
    planButton.textContent = 'Добавить в план';
    planButton.classList.add('btn', 'btn-danger');

    const completedButton = document.createElement('button');
    completedButton.textContent = 'Добавить в сделанные';
    completedButton.classList.add('btn', 'btn-success');

    main.append(nameInput, planButton, completedButton);

    function renderCard(type, text){
        const card = document.createElement('span');
        card.dataset.type = type;
        card.textContent = text;
        tasks.append(card);

        card.addEventListener('click', () => {
            card.remove();
        });
    }

    planButton.addEventListener('click', () => {
        if(nameInput.value !== ''){
            renderCard('planned', nameInput.value);
            nameInput.value = ''
        }
    })

    completedButton.addEventListener('click', () => {
        if(nameInput.value !== ''){
            renderCard('completed', nameInput.value);
            nameInput.value = ''
        }
    })

    // Конец
};

export default setToDo;