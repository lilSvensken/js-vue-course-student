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
    createButtons()
    createResultBlock()
    calc()
};
function createButtons(){
    const buttons = document.querySelector('.calc__buttons')
    for (let i = 0; i < 10; i++){
        const button = document.createElement('button')
        button.classList.add('btn', 'btn-dark');
        button.dataset.type = TYPES.DIGIT
        button.textContent = i
        buttons.append(button)
    }
    ADDITIONAL_BUTTONS.forEach((symbol) => {
        const button = document.createElement('button')
        button.classList.add('btn', 'btn-dark');
        button.textContent = symbol.text
        button.dataset.type = symbol.type
        buttons.append(button)
    })
}
function createResultBlock() {
    const result = document.querySelector('.calc__result');
    const resultText = document.createElement('span');
    resultText.textContent = 'Результат: ';
    const resultNumber = document.createElement('span');
    resultNumber.classList.add('calc__result-number');
    resultNumber.textContent = 0;
    result.append(resultText, resultNumber);
}
function getSum(main){
    return main.textContent
        .split('+')
        .reduce((sum, num) => sum + Number(num), 0)
}
function calc(){
    const buttons = document.querySelectorAll('button')
    const main = document.querySelector('.calc__main')
    buttons.forEach((button) => {
        switch (button.dataset.type){
            case TYPES.DIGIT:
                return  button.addEventListener('click', (event) => {
                    main.textContent = main.textContent + button.textContent;
                });
            case TYPES.PLUS:
                return  button.addEventListener('click', (event) => {
                    main.textContent = main.textContent + '+';
                });
            case TYPES.RESULT:
                return button.addEventListener('click', (event) => {
                    const result = document.querySelector('.calc__result-number');
                    result.textContent = getSum(main, main.textContent);
                });
            case TYPES.RESET:
                return button.addEventListener('click', (event) => {
                    const result = document.querySelector('.calc__result-number');
                    result.textContent = 0;
                    main.textContent = null;
                });
        }
    })
}
export default setCalculator;