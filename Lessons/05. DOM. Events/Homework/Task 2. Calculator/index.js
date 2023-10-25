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
    // Начало
    const mainBlock = document.querySelector(".calc__main")
    const buttonsBlock = document.querySelector(".calc__buttons")

    let buttonElements = [];

    for (let i = 0; i < 10; i += 1) {
        buttonElements.push({ text: i, type: TYPES.DIGIT });
    }
    buttonElements = [ ...buttonElements, ...ADDITIONAL_BUTTONS ];

    buttonElements.forEach(({type, text}) => {
        const button = document.createElement('button')

        button.classList.add('btn', 'btn-dark');
        button.dataset.type = type;
        button.textContent = text;

        buttonsBlock.append(button);
    });

    const resultBlock = document.querySelector('.calc__result')
    const resultText = document.createElement('span')
    resultText.textContent = 'Результат: ';

    const resultNumber = document.createElement('span')
    resultNumber.classList.add('calc__result-number')
    resultNumber.textContent = 0;

    resultBlock.append(resultText, resultNumber);

    const buttons = buttonsBlock.querySelectorAll('button');
    [ ...buttons ].forEach((button) => {
        const buttonType = button.dataset.type;

        if (buttonType === TYPES.DIGIT) {
            button.addEventListener('click', (event) => {
                const currentDigit = button.textContent;
                mainBlock.textContent = `${mainBlock.textContent}${currentDigit}`;
            });

        } else if (buttonType === TYPES.PLUS) {
            button.addEventListener('click', (event) => {
                mainBlock.textContent = mainBlock.textContent + '+';
            });

        } else if (buttonType === TYPES.RESULT) {
            button.addEventListener('click', (event) => {
                const resultText = mainBlock.textContent;
                const sum = resultText.split('+')
                    .reduce((acc, number) => acc + Number(number), 0);
                const resultBlock = document.querySelector('.calc__result-number');
                resultBlock.textContent = sum;
            });

        } else if (buttonType === TYPES.RESET) {
            button.addEventListener('click', (event) => {
                const resultBlock = document.querySelector('.calc__result-number');
                resultBlock.textContent = 0;
                mainBlock.textContent = '';
            });
        }
    });
    // Конец
};

export default setCalculator;