const BASE_URL = 'https://www.anapioficeandfire.com/api/characters/';

const getCharacterData = (characterId, key) => fetch(BASE_URL + characterId)
    .then((data) => data.json())
    .then((data) => {
        alert(`${data.name} - ${data.gender}`)
    });

getCharacterData(583, 'playedBy').then((info) => {
    console.log(info); // Jon Snow, playedBy: Kit Harington
});

const btnsRef = document.querySelectorAll('btn')

btnsRef.forEach(btn => {
    btn.addEventListener('click', () => {
        getCharacterData(Number(btn.value));
    })
})
