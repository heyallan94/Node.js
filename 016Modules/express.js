/**
 * Com o express é muito mais fácil criar o servidor
 */

const express = require('express')

const app = express() //Não esqueça da variável com o express

app.get('/home', (req, res)=>{ //Ao solicitar um get, 2 parametros são exigidos
    res.contentType('text/html') //Não esqueça de colocar o tipo de resposta
    if(res.statusCode === 200){
        res.status(200).send('O HTML VAI AQUI.<br> <h1>Hello Node</h1>')//O status   
    }else if(res.statusCode === 404){
        res.status(404).send('Erro! A sua solicitação falhou. O servidor pode está offline.')//Caso queira colocar mais de um status
    }
    
    //res.status(404).send('Erro! A sua solicitação falhou. O servidor pode está offline.')//Caso queira colocar mais de um status
})

app.get('/users', (req , res)=>{ //Nova rota /users, vai exibir um json com as variáveis
    const users = [
        {
            name: 'Allan',
            age: 27
        },
        {
            name: 'John',
            age: 20
        }
    ]
    res.status(200).json(users)
})

const port = 8080

app.listen(port, ()=> console.log(`Rodando com Express na porta ${port}.`))

