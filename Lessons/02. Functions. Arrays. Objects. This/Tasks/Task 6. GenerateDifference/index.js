// Возвращает копию элемента
const getCopy = (el) => JSON.parse(JSON.stringify(el));

// Возвращает массив без дубликатов
const onlyUnique = (array) => [ ...new Set(array) ];

const generateDifference = (objOne, objTwo) => {
    // Начало
    const copyObjOne = getCopy(objOne);
    const copyObjTwo = getCopy(objTwo);


    // Конец
};

export default generateDifference;