
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
  const textBlock = document.querySelector('.calc__main');
  const result = document.querySelector(".calc__result");
  const calc_buttons = document.querySelector(".calc__buttons");
  const resultTextElement = document.createElement('span');
  resultTextElement.textContent = 'Результат: ';

  const resultNumberElement = document.createElement('span');
  resultNumberElement.classList.add('calc__result-number');
  resultNumberElement.textContent = 0;
  result.append(resultTextElement, resultNumberElement);

  for (let i = 0; i <= 9; i++) {
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-dark');
    button.textContent = i.toString();
    button.dataset.type = TYPES.DIGIT;
    calc_buttons.append(button);
  }

  ADDITIONAL_BUTTONS.forEach((buttonData) => {
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-dark');
    button.textContent = buttonData.text;
    button.dataset.type = buttonData.type;
    calc_buttons.append(button);
  });
  const buttons_Array = document.querySelectorAll('button');
  buttons_Array.forEach((button)=>{
    const buttonType = button.dataset.type;
    if(buttonType==='digit'){
      button.addEventListener('click', ()=>{
       const digit = button.textContent;
        textBlock.textContent = textBlock.textContent + digit;
      });
    }else if(buttonType==='plus'){
      button.addEventListener('click', ()=>{
        textBlock.textContent = textBlock.textContent + '+';

      });
    }else if(buttonType==='result'){
      button.addEventListener('click', ()=>{
        const resultText =textBlock.textContent;
        const sum = getsum(resultText);
        resultNumberElement.textContent = sum;
      });
    } else if (buttonType === 'reset') {
    button.addEventListener('click', (event) => {
      const resultBlock = document.querySelector('.calc__result-number');
      resultBlock.textContent = 0;
      textBlock.textContent = '';
    });
  }

  })
};
const getsum = (text) => text
    .split('+')
    .reduce((acc, num) => acc + Number(num), 0);
export default setCalculator;