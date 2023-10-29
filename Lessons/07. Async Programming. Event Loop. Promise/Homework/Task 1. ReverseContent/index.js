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
            .then(file => {
                    let newFile = file.split('\n').reverse()
                    newFile = newFile.join("\n")
                    resolve(newFile)
                }
            )
    })
    return promise
        .then((data) => fs.writeFile(filepath, data, 'utf8'))
        .catch((err) => console.log(err))
    // Конец
};

export default reverseContent;