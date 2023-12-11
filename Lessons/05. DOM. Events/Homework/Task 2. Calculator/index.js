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

    // Конец
};

export default setCalculator;
