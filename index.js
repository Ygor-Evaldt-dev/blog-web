const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const { application } = require('express');
const { json } = require('body-parser');
const Post = require('./models/Post');

// config
  // Definindo para o express a template Engine a ser utilizada
  app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
  app.set('view engine', 'handlebars');

  // Defini caminho pra requisições via post
  app.use(express.urlencoded({extended:false}));
  app.use(express.json());

//Rotas
  // rota principal
  app.get('/', (req, res) => {
    Post.findAll({order: [['id', 'DESC']]}).then((posts) => {
      res.render('home', {posts: posts});
    });
  });

  // registra post
  app.get('/register', (req, res) => {
    res.render('form');
  });

  //  post enviado com method: POST
  app.post('/registered', (req, res) => {
    Post.create({
      title: req.body.title,
      content: req.body.content
    }).then(() => {
      res.redirect('/');
    }).catch((error) => {
      res.send(`Erro ao cadastrar postagem - ${error}`);
    });
  });  

// Subindo servidor local na porta 8081
app.listen(8081, () => {
  console.log('Servidor rodando na url http://localhost:8081');
})
