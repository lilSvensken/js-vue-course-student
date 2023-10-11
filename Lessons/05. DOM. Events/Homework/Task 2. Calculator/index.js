// import {c} from "sinon/lib/sinon/spy-formatters";

const TYPES = {
    DIGIT: 'digit',
    PLUS: 'plus',
    RESULT: 'result',
    RESET: 'reset',
};

const ADDITIONAL_BUTTONS = [
    {
        text: '+',
        type: TYPES.PLUS,
    },
    {
        text: '=',
        type: TYPES.RESULT,
    },
    {
        text: 'Сбросить',
        type: TYPES.RESET,
    },
];

const setCalculator = () => {

    let a = '';

    const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    // Начало
    const main = document.querySelector('.calc__main');
    const out = document.querySelector('.calc__result-number');



    document.querySelector('.calc__buttons').addEventListener('click', (event) => {
        // нажата кнопка "Сбросить"


        main.textContent = '';
        const key = event.target.textContent;

        if(digit.includes(key)){
            a += key;
            console.log(a)
            main.textContent = a;
        }

        for (let i = 0; i < ADDITIONAL_BUTTONS.length; i++) {
            if (ADDITIONAL_BUTTONS[i].text === key && key !== 'Сбросить' && key !== '=') {
                a += ADDITIONAL_BUTTONS[i].text;
                main.textContent = a;
            } else if (ADDITIONAL_BUTTONS[i].text === key && key === 'Сбросить') {
                a = '';
                main.textContent = a;
                out.textContent = '';
            } else if (ADDITIONAL_BUTTONS[i].text === key && key === '=') {
                main.textContent = a;
                out.textContent = eval(a);

            }
        }
    })

    // КОД САМ ПО СЕБЕ РАБОТАЕТ, НО ДУМАЮ ПРОВЕРКУ ТЕСТОМ НЕ ПРОЙДЕТ, ПОТОМУ ЧТО
    // РАБОТА КАЛЬКУЛЯТОРА БЫЛА ЧУТЬ ИЗМЕНЕНА


    // Конец
};

export default setCalculator;