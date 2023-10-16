/**
 * @jest-environment jsdom
 */
import setTrafficLight from './index';

const simulateSelectValueChange = (selector, value) => {
    const select = selector.querySelector('select');
    select.value = value;

    const event = new Event('change', {
        bubbles: true,
        cancelable: true,
    });

    select.dispatchEvent(event);
};

describe('05.c.3 setTrafficLight', () => {
    document.body.innerHTML = '<div class="traffic">' +
        '<div class="traffic__lights"></div>' +
        '<div class="traffic__lights-select"></div>' +
        '</div>';
    setTrafficLight();

    const trafficLights = document.querySelector('.traffic__lights');
    const trafficLightsSelect = document.querySelector('.traffic__lights-select');
    const container = trafficLights.querySelector('.traffic__lights-container');

    it('05.c.3.1 lights have been added', () => {
        expect(container).not.toBeNull();

        const spans = container.querySelectorAll('span');
        expect([ ...spans ].length).toBe(3);
    });

    it('05.c.3.2 select and options have been added', () => {
        const select = trafficLightsSelect.querySelector('select');
        expect(select).not.toBeNull();

        const options = select.querySelectorAll('option');
        const texts = [ ...options ].map((el) => el.textContent);
        const correctTexts = [ 'Красный', 'Желтый', 'Зеленый' ];
        expect(texts).toEqual(correctTexts);
    });

    it('05.c.3.3 red is default trafficLight color', () => {
        const lights = container.querySelectorAll('span');
        const [ redLight, yellowLight, greenLight ] = [ ...lights ];

        expect(redLight.className).toBe('red-light');
        expect(yellowLight.className).toBe('');
        expect(greenLight.className).toBe('');
    });

    it('05.c.3.4 click on yellow option', () => {
        simulateSelectValueChange(trafficLightsSelect, 'yellow');

        const lights = container.querySelectorAll('span');
        const [ redLight, yellowLight, greenLight ] = [ ...lights ];

        expect(redLight.className).toBe('');
        expect(yellowLight.className).toBe('yellow-light');
        expect(greenLight.className).toBe('');
    });

    it('05.c.3.5 click on green option', () => {
        simulateSelectValueChange(trafficLightsSelect, 'green');

        const lights = container.querySelectorAll('span');
        const [ redLight, yellowLight, greenLight ] = [ ...lights ];

        expect(redLight.className).toBe('');
        expect(yellowLight.className).toBe('');
        expect(greenLight.className).toBe('green-light');
    });
});
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

const resetLights = () => {
    const trafficLights = document.querySelector('.traffic__lights');
    const lights = trafficLights.querySelectorAll('span');
    lights.forEach((element) => {
        element.className = '';
    });
};

const setLight = (type) => {
    const currentLight = document.querySelector(`[data-type=${type}]`);
    currentLight.classList.add(`${type}-light`);
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

    // Создаем селект
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
