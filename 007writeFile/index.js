/**
 * Além de ler arquivos, podemos alterar o mesmo
 * Chamamos de escrever no arquivo
 * 
 */

let { writeFile } = require('fs')

writeFile('dados.txt', 'Escrito no node' , (error)=>{
    if(error){
        throw error;
    } else {
        console.log('Texto alterado')
    }
})