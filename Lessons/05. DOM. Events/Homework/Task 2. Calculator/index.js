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
    
    const calcMain = document.querySelector('.calc__main');
    const calcButtons = document.querySelector('.calc__buttons');
    const calcResult = document.querySelector('.calc__result');

    for (let i = 0; i <= 9; i++) {
        const button = document.createElement('button');
        button.dataset.type = TYPES.DIGIT;
        button.textContent = i;
        button.classList.add('btn', 'btn-dark');
        calcButtons.appendChild(button);
    }

    ADDITIONAL_BUTTONS.forEach((btnData) => {
        const button = document.createElement('button');
        button.dataset.type = btnData.type;
        button.textContent = btnData.text;
        button.classList.add('btn', 'btn-dark');
        calcButtons.appendChild(button);
    });

    const resultLabel = document.createElement('span');
    resultLabel.textContent = 'Результат: ';
    const resultNumber = document.createElement('span');
    resultNumber.classList.add('calc__result-number');
    resultNumber.textContent = '0';

    calcResult.appendChild(resultLabel);
    calcResult.appendChild(resultNumber);

    const updateResultNumber = (value) => {
        resultNumber.textContent = value;
    };

    const handleButtonClick = (event) => {
        const button = event.target;
        const buttonType = button.dataset.type;
        const buttonValue = button.textContent;

        if (buttonType === TYPES.DIGIT || buttonType === TYPES.PLUS) {
        calcMain.textContent += buttonValue;
        } else if (buttonType === TYPES.RESET) {
        calcMain.textContent = '';
        updateResultNumber(0);
        } else if (buttonType === TYPES.RESULT) {
        const expression = calcMain.textContent;
        const numbers = expression.split('+').map(Number);
        const sum = numbers.reduce(
            (total, num) => total + num, 0
        );
        updateResultNumber(sum);
        }
    };

    calcButtons.addEventListener('click', handleButtonClick);
};

export default setCalculator;