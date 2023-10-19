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


const getSumOfInput = (text) => text
    .split('+')
    .reduce((sum, num) => sum + Number(num), 0);


const setCalculator = () => {
    const buttons = document.querySelector('.calc__buttons')
    for (let i = 0; i<=9; i++) {
        const button = document.createElement('button')
        button.classList.add('btn', 'btn-dark');
        button.dataset.type = TYPES.DIGIT
        button.textContent = i
        buttons.append(button)
    }
    ADDITIONAL_BUTTONS.forEach((sign) => {
        const button = document.createElement('button')
        button.classList.add('btn', 'btn-dark');
        button.dataset.type = sign.type
        button.textContent = sign.text
        buttons.append(button)
    })

    const result = document.querySelector('.calc__result')
    const textResult = document.createElement('span')
    textResult.textContent = 'Резултат:'
    const countOfResult = document.createElement('span')
    countOfResult.classList.add('calc__result-number')
    countOfResult.textContent = 0
    result.append(textResult,countOfResult)

    const setOfSign = document.querySelector('.calc__main')

    const allButtons = buttons.querySelectorAll('button');
    [ ...allButtons ].forEach((button) => {
            const typeOfButton = button.dataset.type

        if (typeOfButton === TYPES.DIGIT) {
            button.addEventListener('click', (event) => {
                setOfSign.textContent = setOfSign.textContent + button.textContent
            });

        }
        else if (typeOfButton === TYPES.PLUS) {
            button.addEventListener('click', (event) => {
                setOfSign.textContent = setOfSign.textContent + '+'
            });

        }
        else if (typeOfButton === TYPES.RESULT) {
            button.addEventListener('click', (event) => {
                const dataOfResult = setOfSign.textContent
                const sumOfAll = getSumOfInput(dataOfResult)
                const result = document.querySelector('.calc__result-number')
                result.textContent = sumOfAll
            });

        }
        else if (typeOfButton === TYPES.RESET) {
            button.addEventListener('click', (event) => {
                const result = document.querySelector('.calc__result-number')
                setOfSign.textContent = null
                result.textContent = 0
            });
        }
    })


};

export default setCalculator;