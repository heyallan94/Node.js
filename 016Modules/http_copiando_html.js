// Criar um servidor de forma nativa

const http = require('http')
const fs = require('fs')

const port = 3005

const server = http.createServer((req, res)=>{//Dois parametros, um de requisição, outro de resposta

    if(req.url === "/home"){ //se a requisição de url for /home
    fs.readFile('./Teste2/textoProHttp.html', (err , data)=>{ //Já aqui colocamos o caminho pro html, e logo depois caso der erro ou não
        if(err){
            res.writeHead(404)//Aqui a aplicação INFORMA QUAL É O TIPO DE ERRO
            res.end('Erro: Arquivo não encontrado')//Aqui é apenas a mensagem, que também pode ser em HTML, mas aqui falta o Content-Type
        }else{
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        }
    })
    }

})

server.listen(port, ()=> console.log(`Rodando na porta ${port}`))
