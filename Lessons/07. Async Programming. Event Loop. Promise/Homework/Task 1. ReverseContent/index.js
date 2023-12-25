import { promises as fs } from 'fs';
import path from 'path';


// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования метода
// const currentPath = getPath('/one.txt');



const fs = require('fs');

const reverseContent = (filePath)=> {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (error, data) => {
            if (error) {
                reject(error);
                return;
            }

            const lines = data.split('\n');
            const reversedLines = lines.reverse();
            const reversedContent = reversedLines.join('\n');

            fs.writeFile(filePath, reversedContent, 'utf8', error => {
                if (error) {
                    reject(error);
                    return;
                }

                resolve();
            });
        });
    });
}

export default reverseContent;