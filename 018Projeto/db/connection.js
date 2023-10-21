/*
Esse daqui é o arquivo de conexão com o banco de dados */
const Sequelize = require('sequelize') //O sequelize é uma aplicação para usar banco dados relacionais

const sequelize = new Sequelize({//criar uma instância
    dialect : 'sqlite',//qual banco de dados usaremos
    storage : './db/app.db',//Aqui ele vai criar um banco de dados dentro desse caminho e também, arquivos sqlite geralmente termina em .db (database)
})

module.exports = sequelize //Para deixar disponível para a aplicação principal, devemos exportar

/*
Dúvida : Toda a vez que esse código for executado, 
o banco de dados será reescrito, ou um NOVO banco de dados irá surgir? 
Se surgir, qual nome será?

R-
    Sempre que esse código for executado, ele criará uma nova instância do Sequelize e 
se conectará ao banco de dados especificado no arquivo ./db/app.db.
    Se o arquivo ./db/app.db não existir, o Sequelize criará um novo banco de dados SQLite 
com esse nome. Se o arquivo já existir, o Sequelize abrirá o banco de dados existente 
e permitirá que você acesse e manipule os dados existentes nele.
    Em resumo, o código não recriará o banco de dados a cada execução, a menos que você o 
instrua para fazer isso explicitamente. Ele criará um novo banco de dados se o arquivo 
não existir ou abrirá o banco de dados existente se o arquivo já estiver presente no 
caminho especificado. O nome do banco de dados será "app.db", de acordo com o caminho 
especificado no storage
*/