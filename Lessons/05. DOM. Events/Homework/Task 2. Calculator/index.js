const setCalculator = () => {

    const buttonBlock = document.querySelector('.calc__buttons');

    for (let i = 0; i <= 9; i++) {
        const button_digit = document.createElement('button');
        button_digit.classList.add('btn', 'btn-dark');
        button_digit.textContent = i.toString();
        button_digit.dataset.type = 'digit';
        buttonBlock.append(button_digit);

    }
    const button_plus = document.createElement('button');
    const button_equals = document.createElement('button');
    button_plus.classList.add('btn', 'btn-dark');
    button_equals.classList.add('btn', 'btn-dark');
    button_plus.textContent = '+';
    button_equals.textContent = '=';
    button_plus.dataset.type = 'plus';
    button_equals.dataset.type = 'equals';
    buttonBlock.append(button_plus, button_equals);

    const button_reset = document.createElement('button');
    button_reset.classList.add('btn', 'btn-dark');
    button_reset.textContent = 'Сбросить';
    button_reset.dataset.type = 'reset';
    buttonBlock.append(button_reset);

    const resultBlock = document.querySelector('.calc__result');

    const result_field = document.createElement('span');
    result_field.textContent = 'Результат: ';
    const result_value = document.createElement('span');
    result_value.textContent = 0;
    result_value.classList.add('calc__result-number');
    resultBlock.append(result_field, result_value);

    const mainBlock = document.querySelector('.calc__main');
    const buttons = buttonBlock.querySelectorAll('button');

    let result = 0;
    let number = '';
    buttons.forEach((button) => {
        const buttonType = button.dataset.type;

        button.addEventListener('click', () => {
            if (buttonType === 'digit') {
                mainBlock.textContent += `${button.textContent}`;
                number += `${button.textContent}`;
            } else if (buttonType === 'plus') {
                mainBlock.textContent += '+';
                result += Number(number);
                number = ''
            } else if (buttonType === 'equals') {
                result += Number(number);
                result_value.textContent = result;
                result = 0;
                number = '';
            } else if (buttonType === 'reset') {
                result = 0;
                result_value.textContent = 0;
                number = 0;
                mainBlock.textContent = '';
            }
        })
    })
};

export default setCalculator;
