// Возвращает копию элемента
const getCopy = (el) => JSON.parse(JSON.stringify(el));

// Возвращает массив без дубликатов
const onlyUnique = (array) => [...new Set(array)];

const generateDifference = (objOne, objTwo) => {
    let result = {};
    let o1keys = Object.keys(objOne);
    let o2keys = Object.keys(objTwo);
    let o1values = Object.values(objOne);
    let o2values = Object.values(objTwo);

    for (let i = 0; i < o1keys.length; i++) {
        //ключ есть
        if (o1keys[i] in objTwo) {
            for (let j = 0; j < o2keys.length; j++) {
                if (o1keys[i] === o2keys[j] && o1values[i] === o2values[j]) {
                    result[o1keys[i]] = 'unchanged';
                } else if (o1keys[i] === o2keys[j] && o1values[i] !== o2values[j]) {
                    result[o1keys[i]] = 'changed';
                }
            }
        } else {
            result[o1keys[i]] = 'deleted';
        } // ключа нет: added  - ключа нет в первом объекте, но есть во втором/
        // deleted - в первом нет. во втором есть
    }

    for (let i = 0; i < o2keys.length; i++) {
        if (!(o2keys[i] in objOne) && !(o2keys[i] in result)) {
            result[o2keys[i]] = 'added';
        }
    }
    return result;
};
export default generateDifference;