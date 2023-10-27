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
    const mainContainer = document.querySelector('.calc__main');
    const buttonsContainer = document.querySelector('.calc__buttons');

    let buttons = [];
    for (let i = 0; i <= 9; i += 1) {
        buttons.push({ text: i, type: TYPES.DIGIT });
    }
    buttons = [...buttons, ...ADDITIONAL_BUTTONS];

    buttons.forEach(({ type, text }) => {
        const buttonElement = document.createElement('button');
        buttonElement.classList.add('btn', 'btn-dark');
        buttonElement.dataset.type = type;
        buttonElement.textContent = text;

        buttonsContainer.append(buttonElement);
    });

    const resultContainer = document.querySelector('.calc__result');
    const resultTextElement = document.createElement('span');
    resultTextElement.textContent = 'Результат: ';

    const resultNumberElement = document.createElement('span');
    resultNumberElement.classList.add('calc__result-number');
    resultNumberElement.textContent = 0;

    resultContainer.append(resultTextElement, resultNumberElement);

    const calculatorButtons = buttonsContainer.querySelectorAll('button');
    [...calculatorButtons].forEach((button) => {
        const buttonType = button.dataset.type;

        if (buttonType === TYPES.DIGIT) {
            button.addEventListener('click', (event) => {
                const currentDigit = button.textContent;
                mainContainer.textContent = `${mainContainer.textContent}${currentDigit}`;
            });
        } else if (buttonType === TYPES.PLUS) {
            button.addEventListener('click', (event) => {
                mainContainer.textContent = mainContainer.textContent + '+';
            });
        } else if (buttonType === TYPES.RESULT) {
            button.addEventListener('click', (event) => {
                const resultText = mainContainer.textContent;
                const sum = getSumOfText(resultText);

                const resultElement = document.querySelector('.calc__result-number');
                resultElement.textContent = sum;
            });
        } else if (buttonType === TYPES.RESET) {
            button.addEventListener('click', (event) => {
                const resultElement = document.querySelector('.calc__result-number');
                resultElement.textContent = 0;
                mainContainer.textContent = '';
            });
        }
    });


    // Конец
};

export default setCalculator;
