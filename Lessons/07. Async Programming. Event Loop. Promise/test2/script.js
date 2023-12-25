/*const getTodos = fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
getTodos
    .then((data)=>data.json())
    .then((data)=>{
        console.log(data)
        document.body.innerText=data.title
    })
    .catch((err)=>console.error(err))
*/
/*fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => {
        json.forEach(task=>{
            document.body.innerHTML+=
                ` <div> ${task.id}. ${task.title} </div><br>`

        })
    });
*/
/*let currentUserId = 1;
fetch(`https://jsonplaceholder.typicode.com/posts?userId=${currentUserId}`)
    .then((response) => response.json())
    .then((json) => {
        currentUserId++
           console.log(json)
            fetch(`https://jsonplaceholder.typicode.com/posts?userId=${currentUserId}`)
                .then((response) => response.json())
                .then((json) => {
                        console.log(json)
                });
    });
 */
/*const formRef = document.getElementById("form");
formRef.addEventListener('submit', event =>{
    event.preventDefault();
    const formData = new FormData(formRef)
    const formValues = Object.fromEntries(formData)
    console.log(formValues)
    fetch('https://test.com', {
        method:'POST',
        body: JSON.stringify(formValues)
    })
        .finally(()=>{
            alert("Все отправлено")
        })

})


 */
const BASE_URL = 'https://www.anapioficeandfire.com/api/characters/';

const getCharacterData = (characterId) => fetch(BASE_URL + characterId)
    .then((data) => data.json())
    //.then((data) => `${data.name}, ${key}: ${data[key]}`);
    .then((data)=>{
        document.body.innerHTML= `
            <p>  ${data.name} - ${data.gender}</p>`
    })
getCharacterData(583).then((info) => {
    console.log(info); // Jon Snow, playedBy: Kit Harington
});