const setTrafficLight = () => {
    // Начало
    // 1. добавил traffic__lights-container в traffic__lights
    const traffic__lights = document.querySelector(`.traffic__lights`)
    const traffic__lights_container = document.createElement('div');
    traffic__lights_container.classList.add('traffic__lights-container');
    traffic__lights.appendChild(traffic__lights_container);

    // 2. Создал <span> для каждого цвета
    const redLight = document.createElement('span');
    const yellowLight = document.createElement('span');
    const greenLight = document.createElement('span');

    // 3. добавил классы к <span>
    redLight.classList.add('red-light');
    // yellowLight.classList.add('yellow-light');
    // greenLight.classList.add('green-light');

    // 4. добавил <span> в traffic__lights_container
    traffic__lights_container.appendChild(redLight);
    traffic__lights_container.appendChild(yellowLight);
    traffic__lights_container.appendChild(greenLight);

    // 5. Создал <select> и добавил его в traffic__lights_select
    const traffic__lights_select = document.querySelector('.traffic__lights-select');
    const select = document.createElement('select');
    traffic__lights_select.appendChild(select);

    // 6. Создал <option> для каждого цвета с value и textContent
    const optionRed = document.createElement('option');
    optionRed.textContent = 'Красный'
    
    const optionYellow = document.createElement('option');
    optionYellow.textContent = 'Желтый'

    const optionGreen = document.createElement('option');
    optionGreen.textContent = 'Зеленый'

    optionRed.value = 'red'
    optionYellow.value = 'yellow'
    optionGreen.value = 'green'

    // 7. добавил <option> в <select>
    select.appendChild(optionRed);
    select.appendChild(optionYellow);
    select.appendChild(optionGreen);

    
    select.addEventListener("change", function (){
        const selectedValue = this.value
        
        if (selectedValue === 'red') {
            redLight.classList.add('red-light');
            yellowLight.classList.remove('yellow-light');
            greenLight.classList.remove('green-light');
        } else if (selectedValue === 'yellow') {
            yellowLight.classList.add('yellow-light');
            redLight.classList.remove('red-light');
            greenLight.classList.remove('green-light');
        } else if (selectedValue === 'green') {
            greenLight.classList.add('green-light');
            yellowLight.classList.remove('yellow-light');
            redLight.classList.remove('red-light');
        }
   
    })
    

    // console.log(traffic__lights_select);


    // Конец
};

export default setTrafficLight;
