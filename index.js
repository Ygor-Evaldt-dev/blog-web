const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
// config

// Definindo para o express o handlebars como template Engine a ser utilizada
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Rotas
app.get('/', (req, res) => {
  res.render('form');
})

// Servidor local
app.listen(8081, () => {
  console.log('servidor rodando na url http://localhost:8081');
});