import {promises as fs, readFileSync} from 'fs';
import path from 'path';


// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования метода
//const currentPath = getPath('/one.txt');


const reverseContent = (filepath) => {
    let fileContent = fs.readFile(filepath, 'utf8');
    fileContent.then(data => {
        const reversedData = data.split('\n').reverse().join('\n');
        return fs.writeFile(filepath, reversedData);
    })
    return fileContent;
};
export default reverseContent;
