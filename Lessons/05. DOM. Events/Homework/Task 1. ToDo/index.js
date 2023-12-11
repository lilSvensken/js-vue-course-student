const setToDo = () => {
  const main = document.querySelector('.to-do__main')
  const tasks = document.querySelector('.to-do__tasks')
  const input = document.createElement('input')
  const add_But = document.createElement('button')
  const complete_But = document.createElement('button')

  input.type = 'text'
  add_But.textContent = 'Добавить в план'
  complete_But.textContent = 'Добавить в сделанные'

  input.classList.add('form-control', 'form-control-lg')
  add_But.classList.add('btn', 'btn-danger')
  complete_But.classList.add('btn', 'btn-success')

  main.appendChild(input)
  main.appendChild(add_But)
  main.appendChild(complete_But)

  add_But.addEventListener('click', () => {
    add_Task('planned')
  })

  complete_But.addEventListener('click', () => {
    add_Task('completed')
  })

  const add_Task = (type) => {
    const task_Text = input.value
    const task_span = document.createElement('span')
    task_span.textContent = task_Text
    task_span.setAttribute('data-type', type)
    tasks.appendChild(task_span)
    task_span.addEventListener('click', () => {
      tasks.removeChild(task_span)
    })
    input.value = ''
  }
}
export default setToDo
