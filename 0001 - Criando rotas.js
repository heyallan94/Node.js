let express = require('express');
let app = express();

app.get('/', function(req , res){ //A rota padrão é a '/'
    res.send('Primeira rota Express')
});

app.listen(3000 , function(){
    console.log('Ouvindo porta 3000')
})