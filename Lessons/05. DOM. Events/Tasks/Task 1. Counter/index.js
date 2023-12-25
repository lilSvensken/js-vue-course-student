const hostRef = document.getElementById("host");

console.log(hostRef);
// const btn = document.getElementById("btn");
// const btn2 = document.querySelector(".btn-2");
// const btn3 = document.querySelector("#btn");
// const btn4 = document.querySelector("[name = 'btnName']");
// const btn5 = document.querySelector("[id = 'btn']");
// const btn6 = document.querySelector("[type='btn']");
// const btn = hostRef.querySelector("#btn");
// const buttons = hostRef.querySelectorAll(".btn-2");
const buttonsArr = Array.from(hostRef.querySelectorAll(".btn-2"));

buttonsArr.forEach((item, index) => {
    console.log(index, item);
})

item.addEventListener("click", () => {
    console.log(`кнопка с inx ${index} была нажата`);
})

const elementRef = document.getElementById("element");

elementRef.addEventListener("click", () => {
    console.log("КНОПКА БЫЛА КЛИКНУТА");
})

elementRef.oneclick = () => {
    console.log("КНОПКА БЫЛА КЛИКНУТА");
}

const radioArr = Array.from(document.getElementsByName("var"));
const radioArr2 = Array.from(document.querySelector("[name ='var']"));

radioArr2.forEach(inputItem => {
    inputItem.addEventListener("input", () => {
        const parent = inputItem.closest("label");
        const text = parent.querySelector("span").innerText;
        console.log("Изменился выбор");
        console.log(inputItem.value);
        console.log(inputItem.closest("label"));
        console.log(text);
    })
})

export default setCounter;