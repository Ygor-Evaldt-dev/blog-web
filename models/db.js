const Sequelize = require('sequelize');

// conexão com banco de dados
const sequelize = new Sequelize('postapp', 'root', 'n0vas3nha', {
  host: 'localhost',
  dialect: 'mysql',
  query:{raw:true}
});

// Testando conexão com o Banco de dados
sequelize.authenticate().then(() => {
  console.log('Conexão bem sucedida com Banco de Dados!');
}).catch((error) => {
  console.log(`Falha ao conectar com o banco de dados: ${error}`);
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
};