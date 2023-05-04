/**
 * Oque é Node.js 
 * 
 * Ele é um ambiente que permite a execução de JAVASCRIPT
 * FORA do navegador
 * Antigamente, o JS era só executado em um navegador
 * Pois todos os navegadores, por padrão possui um moto 
 * javascript
 * 
 * O chrome usa um motor V8 Engine, que é o padrão do node.js
 * 
 * Utilizamos o node para construir APIs
 */


/**
 * Como funciona?
 * 
 * Possui um núcleo apenas, single threaded
 * 
 * Suporta várias operações simultâneas(non-block)
 * 
 * 
 */

/**
 * Vantagens Node.js
 * 
 * Ótimo uso de memoria(baixo custo)
 * Usa pouca mémoria, para colocar um servidor online
 * paga pouco
 * 
 * Harmonia com front-end(ambos utilizam javascript)
 * 
 * Muito rápido, simples e escalável
 * 
 * Presença extremamente forte no mercado
 * 
 *  * 
 */

/**
 * Módulos de node.js
 * 
 * Podemos criar nossos próprios módulos(nossos arquivos) e importa-los
 * 
 * O Node.js vem com módulos pré-instalados
 * path, fs , http , etc
 * 
 * Para importar um modulo, utilizamos CommonJS
 * 
 */

const path = require('path') //importando módulo path
const meuArquivo = require('./meu-arquivo.js')

//Significa dizer que o módulo path é essa variável path agora

