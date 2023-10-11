// Criar um servidor de forma nativa

const http = require('http')
const fs = require('fs')

const port = 3000

const server = http.createServer((req, res)=>{//Dois parametros, um de requisição, outro de resposta

    if(req.url === "/home"){ //se a requisição de url for /home
        res.writeHead(200, {'Content-Type': 'text/html'}) //a RESPOSTA será um 'text/html', writeHead é um título de cabeçalho, o número 200 indica que foi tudo OK
        res.end("<h1>HTML TODO AQUI</h1>") //o end termina o res por aqui, nada mais pode ser escrito e enviado.
    }

    if(req.url === '/users'){ //Se a url for /users
        const users = [ //Vai ter uma variavel array de objetos
            {
                name: 'Allan Santos',
                email: 'AllanSantos@gmail.com'
            },{
                name: 'Mister Dotz',
                email: 'EsqueceramDoDotz@gmail.com'
            }
        ]
            //Novamente, a resposta, se der tudo certo, será 200 o código, tipo de conteúdo, agora é 'application/json'
        res.writeHead(200, {'Content-Type:': 'application/json' })
        res.end(JSON.stringify(users)) //Por fim, queremos que a resposta vire um JSON
    }
})

server.listen(port, ()=> console.log(`O NODE ESTÁ RODANDO CARO AMIGUÉ JOÃO`))
