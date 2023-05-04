let express = require('express')
let app = express()

app.get('/', function(req , res){  //Ele não está requisitando nada, portanto devemos responder 
    res.send('Primeira rota com Express')
}) //Rota '/' é a rota inicial da nossa API, todo site tem essa rota

//Para sabermos se o servidor está aberto, devemos passar uma porta
app.listen(3000 , function(){
    console.log('A aplicação está na porta 3000')
})

//O servidor está aberto na porta 3000

//Note que a resposta que recebemos é um HTML 
//'meio quebrado' pois não é a maneira correta de PEGAR esses dados