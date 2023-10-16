const userColor = document.getElementById("promise")
const loadRef = document.getElementById("load")
setDefaultColor();
onListener();

function onListener() {
    const promise = new Promise((resolve, reject) => {
        userColor.addEventListener("change", () => {
            const selectOption = userColor.value;
            localStorage.setItem("COLOR_LS", selectOption)

            if (selectOption === 'red') {
                reject("Ошибка, красный")
            } else if (selectOption === 'green') {
                resolve("Ок,зеленый")
            }
        })
    })
}
promise
.then((text)=>console.log(text))
.catch((err)=>console.log(err))
.finally(()=>onListener())
function setDefaultColor(){
    userColor.value  = localStorage.getItem("COLOR_LS")

    setTimeout()
    loadRef.classList.add("hide")
    userColor.remove("hide");
}