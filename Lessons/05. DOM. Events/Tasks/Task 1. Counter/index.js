// const setCounter = () => {
    
// };

// export default setCounter;

const hostRef = document.getElementById("host");


// const btn = hostRef.getElementById("btn");

const btnsArr = Array.from(document.querySelectorAll(".btn-2"));

// const btn3 = document.querySelector("[name='btnName'");

// console.log(btnsArr)

btnsArr.forEach((item, index) => {
    console.log(index, item);

    item.addEventListener('click', () => {
        console.log(`кнопка с inx ${index} была нажата`)
    })
})

const elementRef = document.getElementById("element");


// Прослушка для элемента - Первый способ (добавляет прослушку)
elementRef.addEventListener('click', function() {
    console.log("КНОПКА БЫЛА КЛИКНУТА");
})

// Прослушка для элемента - Второй способ (перекрывает прослушку)
elementRef.onclick = () => {
    console.log("КНОПКА БЫЛА КЛИКНУТА")
}

// elementRef.addEventListener('click', () => {
//     console.log("КНОПКА БЫЛА КЛИКНУТА");
// })

const radioArr = Array.from(document.getElementsByName("var"))

radioArr.forEach(inputItem => {
    inputItem.addEventListener('input', () => {
        const parent =inputItem.closest('label')
        const text = parent.querySelector('span').innerText
        console.log('ИЗМЕНИЛСЯ ВЫБОР')
        console.log(inputItem.value)
        console.log(inputItem.closest('label'))
        console.log(text)
    })
})


const formRef = document.getElementById("form")

formRef.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("Отправил")
})
const blockRef = document.getElementById("block");


let timeout;

blockRef.addEventListener('mousemove', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        console.log("ДВИЖЕНИЕ МЫШИ")
    }, 200)
})

blockRef.addEventListener('mouseout', () => {
    console.log("Вышли за блок")
    clearTimeout(timeout);
}, 200)

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        console.log("Бай бай")
    }
})

let isActive = false;

blockRef.onclick = () => {
    if (isActive){
        // isActive = false
        blockRef.style.background = 'grey'
    } else {
        blockRef.style.background = 'red'
    }
    isActive = !isActive
    
}


// setTimeout(() => {
//     console.log("ТАЙМЕР")
// }, 2000)

// setInterval(() => {
//     console.log("ИНТЕРВАЛ")
// }, 1000)