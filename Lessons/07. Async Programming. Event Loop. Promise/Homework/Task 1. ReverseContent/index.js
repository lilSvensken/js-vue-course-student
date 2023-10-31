import { promises as fs } from 'fs';
import path from 'path';


// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования метода
// const currentPath = getPath('/one.txt');


const reverseContent = (filepath) => {
    // Начало
    return fs.readFile(filepath, "utf-8")
        .then((text) => {
            const reversedText = text.split("\n").reverse().join("\n");
            return fs.writeFile(filepath, reversedText);
        })
        .catch((err) => {
            console.log(err);
        });
    // Конец
};

export default reverseContent;