/**
 * 
 * Postman é o software mais utilizado para testar APIs
 * 
 * 
 * Quando ainda não é uma interface gráfica, podemos testar
 * por meio dele as rotas de nossa API
 * 
 * 
 * https://www.postman.com/downloads/ 
 * 
 * 
 */

// 1 Iniciando o SERVIDOR  pelo Node.js
// 2 Ir no Postman e digitar o nome da rota

let express = require('express')
let app = express()


//localhost:3000
app.get('/', function(req , res){
    res.send('Primeira rota com Express')
})

//localhost:3000/teste   * Lembrar de reiniciar a rota se quiser mudar * 
app.get('/teste', function(req , res){
    res.send('Outra rota na api')
})

app.listen(4000 , function(){
    console.log('A aplicação está na porta 4000')
})

console.log('A')
