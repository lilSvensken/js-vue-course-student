import { promises as fs } from 'fs';
import path from 'path';


// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования метода
// const currentPath = getPath('/one.txt');


const reverseContent = (filepath) => {
    let  s = '';
    const promise = fs
    .readFile(filepath, 'utf-8')
        .then((data1) => {
            let temp = data1.split('\n')
            for (let i = temp.length-1; i>=0; i--){
                if (i !== 0) {
                    s = s + temp[i] + '\n';
                }else {
                    s = s + temp[i];
                }
            }

        })
        .then(() => {const fs = require('fs');
            fs.writeFileSync(filepath, s);
        });
    return promise;
};

export default reverseContent;