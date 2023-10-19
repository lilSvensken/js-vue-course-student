import { promises as fs } from 'fs';


const reverseContent = (filepath) => {
    return fs.readFile(filepath, 'utf-8')
        .then((data) => {
            const lines = data.split('\n');

            const reversedLines = lines.reverse();

            const reversedContent = reversedLines.join('\n');

            return fs.writeFile(filepath, reversedContent, 'utf-8');
        })
        .then(() => {
            console.log(`Файл ${filepath} успешно перевернут.`);
        })
        .catch((error) => {
            console.error(`Ошибка: ${error.message}`);
        });
};

export default reverseContent;

