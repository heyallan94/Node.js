/*
Podemos usar um arquivo de texto para ser lido pelo node

Caso esse arquivo não exista, devemos configurar o erro
*/

let {readFile} = require('fs') //NOTE NO F DE readFile

readFile('nomeDoArquivo.txt', 'utf8', (error, texto) => {
  if (error) {
    throw error;
  } else {
    console.log(texto)
  }
})