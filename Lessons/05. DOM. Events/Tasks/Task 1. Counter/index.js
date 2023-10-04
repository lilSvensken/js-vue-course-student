const hostRef = document.getElementById("host")


/*const btnInHost = hostRef.querySelector(".btn-2")
const btn = document.getElementById("btn")
const btn2 = document.querySelector(".btn-2")
const btn3 = document.querySelector("#btn")
const btn4 = document.querySelector("[name='btnName']")
*/
const buttonsArr = Array.from(hostRef.querySelector(".btn-2"))
console.log(buttonsArr)

buttonsArr.forEach((item , index) => {
    console.log(index , item)

    item.addEventListener('click',() => {
        console.log(`Кнопка `)
    })
})

const elementRef = document.getElementById("element")

elementRef.addEventListener('click', function () {
    console.log("Кнопка была кликнута")
})

const radioArr2 = Array.from(document.getElementsByName("var"))
const radioArr = Array.from(document.querySelectorAll("[name = 'var']"))

radioArr.forEach((inputItem) => {
  inputItem.addEventListener('input',() => {
      const parent = inputItem.closest('label');
      const text = parent.querySelector('span').innerText;
      console.log('изменился выбор');
      console.log(inputItem.value);
      console.log(text)
    })
})

const blockRef = document.getElementById("block");
let timeout;
blockRef.addEventListener('mousemove', () => {
    clearTimeout(timeout);
    timeout =setTimeout (() => {
        console.log("Движение мыши")
    },200)

})

blockRef.addEventListener('mouseout', () => {
    console.log('Вышел за блок')
    clearTimeout(timeout)
})

document.addEventListener('keydown', (event) => {
    if(event.key === 'Escape' || event.key === 'Enter') {
        console.log("Выход")
    }
})

let isActive = false;

blockRef.onclick = () => {
    if (isActive) {
    blockRef.style.backgroundColor = 'grey'
    } else {
        blockRef.style.backgroundColor = 'red'
    }
    isActive = !isActive
}

/*setTimeout(() => {
    console.log("ТАЙМЕР")
}, 2000)

setInterval(() => {
    console.log("Интервал")
}, 1000)*/