// Возвращает копию элемента
const getCopy = (el) => JSON.parse(JSON.stringify(el));

// Возвращает массив без дубликатов
const onlyUnique = (array) => [ ...new Set(array) ];

const generateDifference = (objOne, objTwo) => {
    // Начало
    const resObj = { ...objOne, ...objTwo };
    const firstKeys = Object.keys(objOne);
    const secondKeys = Object.keys(objTwo);

    for (let i = 0; i < firstKeys.length; i++) {
        const curKey = firstKeys[i];
        if (objTwo.hasOwnProperty(curKey)) {
            if (objOne[curKey] !== objTwo[curKey]) {
                resObj[curKey] = "changed";
            } else {
                resObj[curKey] = "unchanged";
            }
        } else {
            resObj[curKey] = "deleted";
        }
    }

    for (let i = 0; i < secondKeys.length; i++) {
        const key = secondKeys[i];
        if (!objOne.hasOwnProperty(key)) {
            resObj[key] = "added";
        }
    }
    return resObj;
    // Конец
};

export default generateDifference;
