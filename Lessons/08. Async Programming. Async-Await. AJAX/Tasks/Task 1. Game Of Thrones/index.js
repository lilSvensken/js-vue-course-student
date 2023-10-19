const BASE_URL = 'https://www.anapioficeandfire.com/api/characters/';

const getCharacterData = (characterId, key) => fetch(BASE_URL + characterId)
  .then((data) => data.json())
  .then((data) => `${data.name}, ${key}: ${data[key]}`);


getCharacterData(583, 'playedBy').then((info) => {
  console.log(info); // Jon Snow, playedBy: Kit Harington
});
//  export default getCharacterData;




