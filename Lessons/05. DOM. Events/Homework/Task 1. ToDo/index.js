const setToDo = () => {
    // Начало
    const to_do_main = document.querySelector('.to-do__main');

    // 1. Создал <input type="text">
    const input = document.createElement('input')
    input.type = 'text'
    input.classList.add('form-control', 'form-control-lg');

    // 2. Создал <button></button>(2) с textContent
    const button1 = document.createElement('button')
    button1.textContent = 'Добавить в план'
    button1.classList.add('btn', 'btn-danger')

    const button2 = document.createElement('button')
    button2.textContent = 'Добавить в сделанные'
    button2.classList.add('btn', 'btn-success')
    
    // 3. input, button(2) добавил в <div class="to-do__main">
    to_do_main.appendChild(input)
    to_do_main.appendChild(button1)
    to_do_main.appendChild(button2)


    const to_do__tasks = document.querySelector('.to-do__tasks')

    // 4. Создал ф-ию, кот создает <span data-type="???"</span>
    function createButton(val) {
        const span = document.createElement('span')
        span.setAttribute('data-type',val)
        span.textContent = input.value
        to_do__tasks.appendChild(span)
        input.value = ''
        // 4.1 при нажатии на <span>???</span> удаляем <span>???</span>
        span.addEventListener('click', () => {
            span.remove()
        })
    }
    
    // 5. создал слушатель для кнопку `Добавить в план`,
    // при нажатии который добавляет вызывается ф-ия createButton(val)
    button1.addEventListener('click', () => {
        if (input.value === '') {return}
        createButton('planned')
    })
    
    // 6. То же самое для button2
    button2.addEventListener('click', () => {
        if (input.value === '') {return}
        createButton('completed')
    })
    // Конец
};

export default setToDo;