const LIGHTS = {
    red: {
        type: 'red',
        text: 'Красный',
    },
    yellow: {
        type: 'yellow',
        text: 'Желтый',
    },
    green: {
        type: 'green',
        text: 'Зеленый',
    },
};

const setTrafficLight = () => {
    // Начало
    const trafficLights = document.querySelector('.traffic__lights');
    const trafficLightsSelect = document.querySelector('.traffic__lights-select');

    // Создаем сам светофор
    const container = document.createElement('div');
    container.classList.add('traffic__lights-container');

    Object.keys(LIGHTS).forEach((light) => {
        const lightElement = document.createElement('span');
        lightElement.dataset.type = LIGHTS[light].type;
        container.append(lightElement);
    });

    trafficLights.append(container);

    // We create a select
    const selectElement = document.createElement('select');
    selectElement.classList.add('form-select');

    Object.keys(LIGHTS).forEach((light) => {
        const option = document.createElement('option');
        option.textContent = LIGHTS[light].text;
        option.value = LIGHTS[light].type;
        selectElement.append(option);
    });

    selectElement.addEventListener('change', (event) => {
        resetLights();
        const currentType = selectElement.value;
        setLight(currentType);
    });

    //выбираем дефолтное значение
    const currentType = LIGHTS.red.type;
    setLight(currentType);

    trafficLightsSelect.append(selectElement);
    // Конец
};

export default setTrafficLight;