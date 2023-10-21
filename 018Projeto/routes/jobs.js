const express    = require('express')//cuidar da parte de rotas
const router     = express.Router()//Objeto do Router
const Job        = require('../models/Job')//Modelo previamente criado
const bodyParser = require('body-parser')

//add job via post
router.post('/add', (req, res)=>{//Estamos chamando o router com o método HTTP post com a função '/add'

    let {title, salary, company, description, email, new_job} = req.body //Note 3 coisas aqui
                                                                         // 1 : O objeto req.body é disponibilizado por meio do body-parser
                                                                         // 2 : Usamos o método de destructuring para assimilar os dados com essas variáveis
                                                                         // 3 : A partir do Express 4, o body-parser já está dentro do Express
})                                                                      