## Bibliotecas útilizadas:
- Express: Subir servidor local
  - npm install express --save
  - Doc: https://expressjs.com/pt-br/

- Handlebars: Template engine, serve para adicionar funcionalidades ao HTML. 
  - Com o Handlebars conseguimos mostrar variáveis que vem do backend no HTML
  - npm install --save express-handlebars (versão do handlebars para express)
  - Doc: https://handlebarsjs.com/

- Sequelize: Trabalhar com Banco de dados
  - npm install --save sequelize
  - Doc https://sequelize.org/docs/v6/getting-started/

- MySql2: permite que o sequelize se conecte com o BD
  - npm install --save mysql2
  - Doc: https://sequelize.org/docs/v6/getting-started/

- body-parser: Trabalhar com dados enviados via formulário(não é necessário)
  - npm install --save body-parser
  - Doc: https://www.npmjs.com/package/body-parser

- nodemon: Editar código sem derrubar servidor
  - npm install nodemon --savbe-dev (apenas para o ambiente de desenvolvimento)
  - Doc: https://www.npmjs.com/package/nodemon

 ## Acessando mysql via terminal:
  - sudo mysql -h host -u user -p