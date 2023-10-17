
const fs = require('fs').promises;
const path = require('path');


// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования метода
// const currentPath = getPath('/one.txt');

const arrayReverse = (arr) => {
    return arr.reduce((acc, current) => {
            const newArr = [current, ...acc]
            return newArr
    }, [])
}

const reverseContent = (filepath) => {
    // Начало
    return new Promise((resolve, rejects) => {
        fs.readFile(filepath, 'utf8')
            .then((dataOneTxt) => {
                
                const dataSplited = arrayReverse(dataOneTxt.split('\n'))
                dataJoined = dataSplited.join('\n')

                return fs.writeFile(filepath, dataJoined, 'utf8')
            })
            .then(() => {
                resolve()   
            })
            .catch((err) => {
                rejects(err)
            })
    })
    // Конец
};

reverseContent(getPath('/one.txt'));
// export default reverseContent;