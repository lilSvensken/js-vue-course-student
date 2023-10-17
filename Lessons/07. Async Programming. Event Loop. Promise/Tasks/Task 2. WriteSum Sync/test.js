const { Console } = require('console');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '__fixtures__', 'one.txt');

// Cинхронное Чтение содержимого файла
try {
    const val = fs.readFileSync(filePath, 'utf8');
    console.log(val);
} catch (error) {
    console.log(error);
}

// Асинхронное Чтение содержимого файла
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    val = data
    console.log(val);
})

