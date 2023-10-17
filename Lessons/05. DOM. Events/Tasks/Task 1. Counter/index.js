const hostRef = document.getElementById("host");

// console.log(hostRef);

// const btn2 = document.querySelector(".btn2")
// const btn3 = document.querySelector("[name=btnName]")
const btnsArr = Array.from(hostRef.querySelectorAll(".btn-2"));

btnsArr.forEach((item, index) => {
    item.addEventListener('click', () =>{
        console.log(`button ${index+1} was pressed`)
    })
    console.log(index, item);
})

const elementRef = document.getElementById("element");
// безопаснее чем 2 способ
elementRef.addEventListener('click', function(){
    console.log("Have been clicked");
})

// elementRef.onclick = () =>{
//     console.log("Have been clicked");
// }


const radioArr = Array.from(document.getElementsByName("var"));
radioArr.forEach(inputItem =>{
    inputItem.addEventListener('input', () =>{
        const parent = inputItem.closest('label');
        const text = parent.querySelector('span').innerText;
        console.log("edit choose");
        console.log(inputItem.value);
        console.log(text);
    })
})

const formRef = document.getElementById('form');

formRef.addEventListener('submit', (event) =>{
    event.preventDefault();
    console.log('submit was pressed');
})


const blockRef = document.getElementById("block");

let timeout;


// blockRef.addEventListener('mousemove', () =>{
//     clearTimeout(timeout);
//     timeout = setTimeout(()=>{
//         console.log("MOOOOOVE");

//     },200)
// })

blockRef.addEventListener('mouseenter', () =>{
    blockRef.style.background = 'red'; 
})
blockRef.addEventListener('mouseout', () =>{
    blockRef.style.background = 'gray'; 
})

document.addEventListener('keydown', (event) =>{
    if(event.key === 'Escape'){
        console.log("no escape");
    }
})

let isActive = false;

const defaultIsActive = localStorage.getItem("IS_ACTIVE");
if(defaultIsActive){
    console.log(defaultIsActive);
}

blockRef.onclick = () => {
    isActive = !isActive;
    if (isActive){
        localStorage.setItem("IS_ACTIVE", 'true');
    }else{
        localStorage.setItem("IS_ACTIVE", 'false');
    }
}

// setTimeout(()=>{
// console.log("timer")
// }, 2000)

// setInterval(() => {
//     console.log("one second")
// }, 1000)