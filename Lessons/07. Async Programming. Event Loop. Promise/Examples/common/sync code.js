// Синхронные операции

// 1
// 2
import fs from 'fs'

console.log('Текст 1')
console.log('Текст 2')
console.log('Текст 3')

const indexFileContent = fs.readFileSync('./files/index', 'utf-8')
fs.writeFileSync('./files/copy-index', content)
