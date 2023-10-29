import { promises as fs } from 'fs';
import path from 'path';


// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования метода
// const currentPath = getPath('/one.txt');


const reverseContent = (filepath) => {
    // Начало
    const promise = new Promise((resolve, reject) => {
        fs.readFile(filepath, 'utf8')
            .then(data => {
                    let newData = data.split('\n').reverse()
                    newData = newData.join("\n")
                    resolve(newData)
                }
            )
    })
    return promise
        .then((reverseData) => fs.writeFile(filepath, reverseData, 'utf8'))
        .catch((err) => console.log(err))
};

export default reverseContent;