const hostRef = document.getElementById("host")
//ref - показатель ссылки на хтмл

//const btn = hostRef.getElementById('btn');
// самый правильный вариант поиска (уникального элемента)

//const btn2 = document.querySelector(".btn2")
//const btn3 = document.querySelector("#btn")
//const btn4 = document.querySelector("[name='btnName']")

const buttonsArr = Array.from(hostRef.querySelectorAll(".btn2"));
console.log(buttonsArr)

buttonsArr.forEach((item, index) => {
    console.log(index, item);

    item.addEventListener('click', () => {
        console.log(`кнопка с inx ${index} была нажата`);
    })
})



const elementRef = document.getElementById("element");
elementRef.addEventListener('click', () => {
    console.log('Кнопка была кликнута');
})

// прослушка для элемента второй способ(перекрывает прослушку), мы приравниваем слушатель к абстрактной переменно
// addeventlistener - безопаснее
elementRef.onclick = () => {
    console.log("Кнопка была кликнута")
}

const radioArr = Array.from(document.getElementsByName("var"));
radioArr.forEach(inputItem => {
    inputItem.addEventListener('input', () => {
        const parent = inputItem.closest('label')
        const text = parent.querySelector('span').innerText;
        console.log('Изменился выбор');
        console.log(inputItem.value);
        console.log(inputItem.closest('label'));
        console.log(text);
    })
})

const formRef = document.getElementById('form');
formRef.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("SUBMIT нажал")
})
//event содержится в колбеке
// обычно тут происходит fetch-запрос

const blockRef = document.getElementById('block');

let timeout;

blockRef.addEventListener('mousemove', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        console.log("Движение мыши")
    }, 200)
})

blockRef.addEventListener('mouseout', () => {
    clearTimeout(timeout);
    console.log("вышли за блок ")
})

document.addEventListener('keydown', (event) => {
   if (event.key === "Escape" || event.key === "Enter") {
       console.log("Выход")
   }
})

let isActive = false;

if (localStorage.getItem("LS_ACTIVE")) {
    console.log(localStorage.getItem("LS_ACTIVE"))
}

blockRef.onclick = () => {
    if (isActive) {
        //isActive = false;
        blockRef.style.background = 'grey';
       //localStorage.setItem("LS_ACTIVE", 'false')
    } else {
        //isActive = true;
        blockRef.style.background = 'red';
        //localStorage.setItem("LS_ACTIVE", 'true')
    }
    isActive = !isActive;
    localStorage.setItem("LS_ACTIVE", isActive)
}



/*etTimeout(() => {
    console.log("Таймер")
}, 2000)

setInterval(() => {

}, 1000)

 */