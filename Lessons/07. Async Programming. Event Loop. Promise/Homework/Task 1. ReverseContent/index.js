import { rejects } from 'assert'
import { error } from 'console'
import { promises as fs } from 'fs'
import path, { resolve } from 'path'

// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName)
// Пример использования метода
// const currentPath = getPath('/one.txt');

const reverseContent = (filepath) => {
  return new Promise((resolveCallback, rejectCallback) => {
    fs.readFile(filepath, 'utf-8')
      .then((text) => {
        const lines = text.split('\n')
        const reversedLines = lines.reverse()
        return fs.writeFile(filepath, reversedLines.join('\n'), 'utf-8')
      })
      .then(resolveCallback)
      .catch(rejectCallback)
  })
}

export default reverseContent
