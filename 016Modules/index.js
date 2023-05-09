/*
========================== IMPORTANTE ===========
Se você puxar uma class sem o {} ele não será um 'constructor
'
const myModule = require('./myModule') //Note que o myModule vira um objeto, pois ele está importando todos os objetos de myModule

myModule.Person = 'Allan' //Como no caso só tem UM OBJETO SENDO EXPORTADO, eu posso digitar o módulo.NomeDaClass, e já alterar se quiser

Porém eu não posso CRIAR NOVAS CLASSes a partir dai, apenas alterar um único objeto
*/


const { Person } = require('./myModule') // Dessa maneira você tem a class em Person

const id = new Person ('Sarah') //Note que id agora é uma cópia do primeiro módulo { Person }

console.log(id.sayMyName())

