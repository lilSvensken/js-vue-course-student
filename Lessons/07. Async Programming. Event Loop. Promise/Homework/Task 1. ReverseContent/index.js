import { promises as fs } from 'fs';
import path from 'path';


// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования метода
// const currentPath = getPath('/one.txt');


const reverseContent = (filepath) => {
    // Начало
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, "utf8")
            .then((dataStr) => {
                return fs.writeFile(filepath, dataStr.split("\n").reverse().join("\n"), 'utf8');
            })
            .then(() => {
                resolve();
            })
            .catch((e) => {
               reject(e)
            })
    });
    // Конец
};

export default reverseContent;