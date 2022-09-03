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
  res.render('home');
})

// lista os posts cadastrados
app.get('/posts', (req, res) => {
  Post.findAll({order: [['id', 'DESC']]}).then((posts) => {
    res.render('posts', {posts: posts});
  });
});

// registra post
app.get('/register', (req, res) => {
  res.render('register');
});

//  post enviado com method: POST
app.post('/registered', (req, res) => {
  Post.create({
    title: req.body.title,
    content: req.body.content
  }).then(() => {
    res.redirect('/posts');
  }).catch((error) => {
    res.send(`Erro ao cadastrar postagem - ${error}`);
  });
});  

// deleta post
app.get('/delete/:id', (req, res) => {
  Post.destroy({where: {'id': req.params.id}}).then(() => {
    res.send(`<h1>Postagem deletada com sucesso</h1><p>Click <a href="/">aqui</a> para retornar a página inicial.</p>`);
  }).catch((error) => {
    res.send(`<h1>Esta postagem não existe.</h1> <p>Click <a href="/">aqui</a> para retornar a página inicial.</p>`);
  });
});

// Subindo servidor local na porta 8081
app.listen(8081, () => {
  console.log('Servidor rodando na url http://localhost:8081');
})