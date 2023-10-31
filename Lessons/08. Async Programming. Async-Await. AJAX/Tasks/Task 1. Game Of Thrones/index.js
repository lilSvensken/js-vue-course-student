const BASE_URL = 'https://www.anapioficeandfire.com/api/characters/';

const getCharacterData = (characterId, key) => fetch(BASE_URL + characterId)
  .then((data) => data.json())
  //.then((data) => `${data.name}, ${key}: ${data[key]}`);
    .then((data) => document.body.innerHTML =
       alert(`${data.name} - ${data.gender}`))
})
getCharacterData(42, 'born').then((info) => {
    console.log(info); // Aegon Targaryen, born: In 281 AC or 282 AC, at Dragonstone
});
const btns = document.querySelectorAll('.btn')
btns.forEach(btn =>{
    btn.addEventListener('click',()=>{
        getCharacterData(Number(btn.value))
    })
})

export default getCharacterData;
