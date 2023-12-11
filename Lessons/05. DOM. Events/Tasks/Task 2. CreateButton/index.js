const createButton = () => {
    // Начало
const container = document.body.querySelector('.button-container');
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-primary');
    button.textContent = "Кнопка"
    button_container.appendChild(button);
    // console.log(button_container)

    // button_container.innerHTML = '<button class="btn btn-primary">Кнопка</button>'
    // console.log(button_container);

    // const button = document.querySelector(".btn");
    // console.log(button);

    // button.addEventListener('click', () => {
    //     const description = document.querySelector(".description");
    //     description.innerHTML = '<span>Текст вставлен!</span>'
    // })

    button.addEventListener('click', () => {
        const description = document.querySelector(".description");
        const span = document.createElement("span");
        span.textContent = "Текст вставлен!";
        description.appendChild(span);
    });
    // Конец
};

export default createButton;
