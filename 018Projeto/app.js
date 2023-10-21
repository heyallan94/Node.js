const express = require('express');
const app = express();
const db = require('./db/connection')//puxar os dados pelo banco de dados

const PORT = 3001;

app.listen(PORT, function(){ //Abrindo um servidor na porta PORT
    console.log(`Express porta ${PORT}`)
})


//Conectar ao banco de dados

db
    .authenticate()//Isso vai retornar uma promise
    .then(()=>{//ao retornar COM SUCESSO, fazer isso
        console.log('Conexão com banco de dados, OK')
    })
    .catch((err)=>{//Se der ERRO, fazer isso
        console.log('Erro ao conectar', err)
    })


app.get('/', (req, res) => {
    res.send('Essa parte aparece no HTML.')
})

console.log(`Ao rodar com node ou nodemon, note que apenas um terminal irá funcionar, pois ao abrir
tal aplicação, a porta será ocupada e não poderá abrir A MESMA PORTAem OUTROS TERMINAIS`)