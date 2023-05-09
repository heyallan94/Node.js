const fs = require('fs')
const path = require('path')

//Podemos criar uma pasta com o fs

fs.mkdir(path.join(__dirname, '/Teste'), (error)=>{
    if ( error) {
        return console.log(error)
    }
    console.log('Pasta criada')
})

//Note que isso é uma função assíncrona, a função de parametro (error)
//vai ser executada somente ao fim do mkdir. 


/*Criar um arquivo dentro de uma pasta específica
dirname : onde atualmente está
/Test: a pasta que deve ir
test.txt : tipo de arquivo
'hello node' conteúdo do arquivo
(error) callback necessário*/

fs.writeFile(path.join(__dirname, '/Teste', 'test.txt'), 'writeFile criou. ', (error)=>{
    if (error) {
        return console.log(error);
    }
    console.log('Arquivo criado');
})

//Para ADICIONAR à um arquivo, sem sobreescrever
fs.appendFile(path.join(__dirname, '/Teste', 'test.txt'), 'appendFile Modificou' , (error) => {
    if (error) {
        return console.log(error)
    }
    console.log('Alterações concluida')
})

//Ler arquivos / Note nos argumentos, path.join(onde está, /Onde procurar/ , 'qual arquivo.extensão') , caracteres , (erro, data) =>{}
fs.readFile(path.join(__dirname, '/Teste' , 'test.txt') , 'utf-8' , (error , data) =>{
    if(error){
        return console.log(error)
    }
    console.log(data)
})

//===================================IMPORTANTE========================
/**
 * NOTE QUE AQUI NÃO ESTÁ ASSINCRONO
 * O ARQUIVO fs2.js está na forma assincrona
 * 
 * 
 * 
 */