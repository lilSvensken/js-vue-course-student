const setCounter = () => {
    // Начало
    const countText = 'Количество нажатий: '; //This const is just for the text of the button
    const counter = document.querySelector('.main'); //We send all, that we do on the code
    // with the const counter, to the html document;
    const button = document.createElement('button'); //We just create the button
    button.classList.add( 'btn', 'btn-warning'); // we design the button, the words between the labels are for appearance
    //btn - the shape of the button, btn-warning - is the color
    button.textContent = countText + '0'; //We add everything, that will be inside the button.
    
    button.addEventListener('click', (event) => {
        const currentCount = event.target.textContent.split(': ')[1]; //target is like a connector between methods
        //we add all that is written in textContent and add "split and the numbers for the counter"
        const newCount = Number(currentCount) + 1;
        event.target.textContent = countText + newCount;
    });
    
    counter.append(button);
    // Конец
};

export default setCounter;
