import { promises as fs } from 'fs';
import path from 'path';
// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования метода
// const currentPath = getPath('/one.txt');

const fs = require('fs').promises;
const readFile = (filePath => {
    return fs.readFile(filePath,'utf8');
});
const writeFile = (filePath,content) => {
    return fs.writeFile(filePath,content,'utf8');
};
const reverseContent = (filepath) => {
    // Начало
    return readFile(filepath)
        .then((content) => {
            const reverseContent = content.split('\n').reverse().join('\n');
            return writeFile(filepath,reverseContent);
        });
    // Конец
};

export default reverseContent;
