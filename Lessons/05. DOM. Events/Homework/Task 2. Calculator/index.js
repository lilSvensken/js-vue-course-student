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
const getSumOfText = (text) => text
    .split('+')
    .filter((el) => el)
    .reduce((acc, num) => acc + Number(num), 0);
const setCalculator = () => {
    // Начало
    const textBlock = document.querySelector('.calc__main');
    const buttonsOfCalculator = document.body.querySelector('.calc__buttons');

    let buttonsElements = [];
    for (let i = 0; i <= 9; i++) {
        buttonsElements.push({text: i, type: TYPES.DIGIT});
    }
    buttonsElements = [...buttonsElements, ...ADDITIONAL_BUTTONS];

    buttonsElements.forEach(({type, text}) => {
        const button = document.createElement('button');
        button.classList.add('btn', 'btn-dark');
        button.dataset.type = type;
        button.textContent = text;

        buttonsOfCalculator.append(button);
    })

    const resultOfTheSum = document.querySelector('.calc__result');

    const resultWord = document.createElement('span');
    resultWord.textContent = 'Результат: ';
    const resultSum = document.createElement('span');
    resultSum.classList.add('calc__result-number');
    resultSum.textContent = 0;

    resultOfTheSum.append(resultWord, resultSum);

    const buttons = buttonsOfCalculator.querySelectorAll('button');
    [...buttons].forEach((button) => {
        const buttonType = button.dataset.type;
        if (buttonType === TYPES.DIGIT) {
            button.addEventListener('click', () => {
                const currentDigit = button.textContent;
                textBlock.textContent = `${textBlock.textContent}${currentDigit}`;
            });
        } else if (buttonType === TYPES.PLUS) {
            button.addEventListener('click', (event) => {
                textBlock.textContent = textBlock.textContent + '+';
            });
        } else if (buttonType === TYPES.RESULT) {
            button.addEventListener('click', (event) => {
                const resultText = textBlock.textContent;
                const sum = getSumOfText(resultText);

                const resultBlock = document.querySelector('.calc__result-number');
                resultBlock.textContent = sum;
            });

        } else if (buttonType === TYPES.RESET) {
            button.addEventListener('click', (event) => {
                const resultBlock = document.querySelector('.calc__result-number');
                resultBlock.textContent = 0;
                textBlock.textContent = '';
            });
        }
    })

    // Конец
};

export default setCalculator;