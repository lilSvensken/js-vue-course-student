import { promises as fs } from 'fs';
import path from 'path';


// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования метода
// const currentPath = getPath('/one.txt');


const reverseContent = async (filepath) => {
    // Начало
    const content = await fs.readFile(filepath, 'utf-8');
    const reversedContent = content.split('\n').reverse().join('\n');
    await fs.writeFile(filepath, reversedContent);
    // Конец
};

export default reverseContent;