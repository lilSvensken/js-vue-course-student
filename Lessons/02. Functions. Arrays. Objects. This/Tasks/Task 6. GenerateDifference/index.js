// Возвращает копию элемента
const getCopy = (el) => JSON.parse(JSON.stringify(el));

// Возвращает массив без дубликатов
const onlyUnique = (array) => [ ...new Set(array) ];

const generateDifference = (objOne, objTwo) => {
    // Начало
    const keys = onlyUnique([...Object.keys(objOne),...Object.keys(objTwo)]);
    const result = {};

    keys.forEach((key) => {
        if (!objOne.hasOwnProperty(key) && objTwo.hasOwnProperty(key)) {
            result[key] = 'added';
        } else if (objOne.hasOwnProperty(key)&&  !objTwo.hasOwnProperty(key)){
            result[key] = 'deleted';
        } else if (objOne[key] !== objOne[key]){
            result[key] = 'changed';
        } else {
            result[key] = 'unchanged';
        }
    });
     return result;
    // Конец
};

export default generateDifference;
