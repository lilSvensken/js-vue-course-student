import { promises as fs } from 'fs';

const reverseContent = (filepath) => {
    return fs.readFile(filepath, 'utf-8')

        .then((data) => {
            const strings = data.split('\n');
            const reversedStrings = strings.reverse();
            const reversedData = reversedStrings.join('\n');
            return fs.writeFile(filepath, reversedData);
        })

        .catch((error) => {
            console.error(`Ошибка`);
        });
};
export default reverseContent;