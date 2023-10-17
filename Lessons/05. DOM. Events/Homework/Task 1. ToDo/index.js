const setToDo = () => {
    const planBtn = document.getElementById("plan")
    const successBtn = document.getElementById("success")
    const tasksSpace = document.querySelector(".to-do__tasks")
    const input = document.getElementById('text')
    planBtn.addEventListener('click', () => {
        var item = document.createElement('span')
        item.innerHTML = input.value
        input.value = ''
        item.setAttribute('data-type', 'planned')
        tasksSpace.append(item)
        item.addEventListener('click', () => {
            const parent = item.parentNode
            parent.removeChild(item)
        })
    })

    successBtn.addEventListener('click', () => {
        var item = document.createElement('span')
        item.innerHTML = input.value
        input.value = ''
        item.setAttribute('data-type', 'completed')
        tasksSpace.append(item)
        item.addEventListener('click', () => {
            const parent = item.parentNode
            parent.removeChild(item)
        })
    })
};

export default setToDo;