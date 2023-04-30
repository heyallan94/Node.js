/**Outro módulo MUITO utilizado
 * é para fazer comunicação via HTTP
 * O Módulo já vem com node
 * Pode criar um servidor que serve páginas
 */

const {createServer} = require("http")

let server = createServer((request, response)=>{
    response.writeHead(200, {"Content-Type": "text/html"})
    response.write(`
    <h1>Hello World!</h1>
    <p>Primeira página web com Node.js</p>`);
    response.end()
});

server.listen(8000)

console.log('Listening! (port 8000)')

//Para acessar o servidor : http://localhost:8000