const setCounter = () => {
    // Начало
    const mainElement = document.querySelector(".main");
    const button = document.createElement('button');
    button.textContent = "Количество нажатий 0"
    mainElement.appendChild(button);


    let counter = 0;

    function handleClick() {
        counter++;
        button.textContent = `Кол-во нажатии: ${counter}`;

        if (counter === 3) {
            button.className = "btn btn-warning"; 
        }
    
    }

    
    button.addEventListener('click', handleClick);
    // Конец
};

export default setCounter;
