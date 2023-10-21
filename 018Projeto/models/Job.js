//Ao criar um modelo, é geralmente colocado o nome do banco de dados no singular
const Sequelize = require('sequelize')
const db = require('../db/connection') //. = diretorio atual | .. = diretorio acima | ../ = sobe nível

const Job = db.define('job',{
    title:{
        type: Sequelize.STRING,
    },
    description:{
        type: Sequelize.STRING,
    },
    salary:{
        type: Sequelize.STRING,
    },
    company:{
        type: Sequelize.STRING,
    },
    email:{
        type: Sequelize.STRING,
    },
    new_job:{
        type: Sequelize.INTEGER,
    },    
})

module.exports = Job // Não esqueça de exportar