const fs = require('fs')
const path = require('path')

//Podemos criar uma pasta com o fs

fs.mkdir(path.join(__dirname, '/Teste2'), (error)=>{
    if ( error) {
        return console.log(error)
    }
    console.log('Pasta criada Teste2')

/*Criar Arquivo*/
    fs.writeFile(path.join(__dirname, '/Teste2', 'test.txt'), 'writeFile criou. ', (error)=>{
        if (error) {
            return console.log(error);
        }
        console.log('Arquivo criado2');
    })

    //Para ADICIONAR à um arquivo, sem sobreescrever
    fs.appendFile(path.join(__dirname, '/Teste2', 'test.txt'), 'appendFile Modificou' , (error) => {
        if (error) {
            return console.log(error)
        }
        console.log('Alterações concluida2')
    })

    //Ler arquivos 
    fs.readFile(path.join(__dirname, '/Teste2' , 'test.txt') , 'utf-8' , (error , data) =>{
        if(error){
            return console.log(error)
        }
        console.log(data)
    })

})

//===================================IMPORTANTE========================
/**
 * NOTE QUE AQUI ESTÁ ASSINCRONO
 * 
 * mkdir vai criar uma pasta Teste2
 * writeFile vai criar um arquivo e escrever conteúdo 'writefile criou'
 * appendFile 'modificou' o conteúdo
 * e por fim o readFile leu o arquivo
 * 
 * Note que o node não espera UM terminar pra ir ao outro
 * Ele executa o mkdir e o mkdin informará quando estiver pronto
 * writeFile, appendfile e readfile seguem o mesmo padrão
 * 
 * Ao final do código, ele volta pro mkdir e verifica que está pronto o diretório
 * O writeFile por sua vez cria o arquivo
 * appendFile modifica
 * readFile ler
 * 
 * 
 * 
 */