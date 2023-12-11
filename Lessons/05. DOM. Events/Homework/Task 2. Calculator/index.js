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
<<<<<<< HEAD
    const textBlock = document.querySelector('.calc__main');
    const buttonsBlock = document.querySelector('.calc__buttons');
    
    let buttonElements = [];
    for (let i = 0; i <= 9; i += 1) {
        buttonElements.push({ text: i, type: TYPES.DIGIT });
    }
    buttonElements = [ ...buttonElements, ...ADDITIONAL_BUTTONS ];
    
    buttonElements.forEach(({ type, text }) => {
        const button = document.createElement('button');
        button.classList.add('btn', 'btn-dark');
        button.dataset.type = type;
        button.textContent = text;
        
        buttonsBlock.append(button);
    });
    
    const resultBlock = document.querySelector('.calc__result');
    const resultTextElement = document.createElement('span');
    resultTextElement.textContent = 'Результат: ';
    
    const resultNumberElement = document.createElement('span');
    resultNumberElement.classList.add('calc__result-number');
    resultNumberElement.textContent = 0;
    
    resultBlock.append(resultTextElement, resultNumberElement);
    
    const buttons = buttonsBlock.querySelectorAll('button');
    [ ...buttons ].forEach((button) => {
        const buttonType = button.dataset.type;
        
        if (buttonType === TYPES.DIGIT) {
            button.addEventListener('click', (event) => {
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
    });
=======
    const calc__buttons = document.querySelector('.calc__buttons');
    let result = 0;

    // 1. Создал ф-ию, кот создает <button></button> и добавляет их в calc__buttons
    function createButton(val) {
        let button = document.createElement('button');
        button.classList.add('btn', 'btn-dark');
        button.textContent = val
        calc__buttons.append(button);

        // 1.1 добавил слушатель для кнопок
        button.addEventListener('click', () => {
            const calc__main = document.querySelector('.calc__main');
            let calc__result__number = calc__result.lastChild

            // 1.1.1 при нажатии на '=' вызывается ф-ия splitTextContent(textContent)
            // и добавляет результат в .calc__result-number
            if (val !== '='){
                calc__main.textContent = calc__main.textContent + val;
                
            } else {
                result = splitTextContent(calc__main.textContent);
                calc__result__number.textContent = result
            }
            
            // 1.1.2 при нажатии на 'Сбросить' сбрасывает результат и textContent
            // у .calc__main
            if (val === 'Сбросить') {
                calc__main.textContent = '';
                calc__result__number.textContent = 0;
            }

            
        })
    }

    // 2. Создал ф-ию, кот сплитит по знаку '+' и возвращает сумму 
    function splitTextContent(textContent) {
        const res = textContent.split('+').reduce((sum, current) => sum + Number(current), 0);
        return res;
    }


    // let a = '12+2'
    // const b = a.split('+');
    // let res = b.reduce((sum,current) => sum + Number(current), 0);
    // console.log(b);
    // console.log(res)

    // 3. Создал кнопки
    const button0 = createButton('0');
    const button1 = createButton('1');
    const button2 = createButton('2');
    const button3 = createButton('3');
    const button4 = createButton('4');
    const button5 = createButton('5');
    const button6 = createButton('6');
    const button7 = createButton('7');
    const button8 = createButton('8');
    const button9 = createButton('9');
    const buttonPlus = createButton('+');
    const buttonEqual = createButton('=');
    const buttonReset = createButton('Сбросить');
    
    // 4. Добавил в .calc__result <span></span>(2)
    const calc__result = document.querySelector('.calc__result');

    const span1 = document.createElement('span');
    span1.textContent = 'Результат: ';
    calc__result.appendChild(span1);

    const span2 = document.createElement('span');
    span2.classList.add('calc__result-number');
    span2.textContent = result;
    calc__result.appendChild(span2); 
>>>>>>> 4f6d6ed49eae54292cdd261c11eecc0860116623
    // Конец
};

export default setCalculator;
