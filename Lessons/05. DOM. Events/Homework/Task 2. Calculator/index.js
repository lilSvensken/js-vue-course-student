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
    const buttons = document.querySelector('.calc__buttons');
    const main = document.querySelector('.calc__main');
    const result = document.querySelector('.calc__result');
    const btnValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '+', '=', 'Сбросить'];
    for (let  i of btnValues){
        let btn = document.createElement('button');
        btn.classList.add('btn', 'btn-dark');
        btn.textContent = i;
        if (i !== '=' && i!== 'Сбросить'){
            btn.addEventListener('click', (event) => {
                main.textContent = main.textContent.concat(btn.textContent);
            })
        }if (i === '='){
            btn.id = 'result';
        }if (i === 'Сбросить'){
            btn.id = 'clear';
        }
        buttons.append(btn);
    }
    const  resultText = document.createElement('span');
    resultText.textContent = 'Результат:';
    let resultNumber = document.createElement('span');
    resultNumber.classList.add('calc__result-number');
    resultNumber.textContent = '0';
    result.append(resultText, resultNumber);
    const clear = document.getElementById('clear');
    clear.addEventListener('click', (event) =>{
        resultNumber.textContent = '0';
        main.textContent ='';
    })
    const res = document.getElementById('result');

    res.addEventListener('click', (event) =>{
        let equation = main.textContent.split('+');
        let r = 0;
        for (let i of equation){
            r = r + Number(i);
        }
        resultNumber.textContent = r;
    })
};

export default setCalculator;