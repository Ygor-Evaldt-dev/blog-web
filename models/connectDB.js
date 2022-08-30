const Sequelize = require('sequelize');
const sequelize = new Sequelize('db_blog_web', 'root', 'n0vas3nha', {
  host: 'localhost',
  dialect: 'mysql'
});

// testando conexão com banco de dados
sequelize.authenticate().then(() => {
  console.log('Database conection sucessful!!');
}).catch((error) => {
  console.log(`Database conection error: ${error}`);
});