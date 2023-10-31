
const selectRef = document.getElementById('select')
const loadRef = document.getElementById('load')

onListener();
setDefaultColor();

function onListener() {
    const promise = new Promise((resolve, reject) => {
        selectRef.addEventListener('change', () => {
                const value = selectRef.value;
                localStorage.setItem("COLOR_LS", value);

                if (value === 'red') {
                    reject("Ошибка, красный цвет");
                } else if (value === "green") {
                    resolve("Окей, зеленый")
                } else if (value === "yellow") {
                    resolve("Желтый, ничего")
                }
            }
        )
    })

    promise
        .then((text) => console.log(text))
        .catch((text) => console.error(text))
        .finally(() => onListener());
}

function setDefaultColor () {
    selectRef.value =  localStorage.getItem("COLOR_LS")


    setTimeout(() => {
        loadRef.classList.add('hide')
        selectRef.classList.remove('hide')
    }, 2000)
}