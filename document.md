## Este arquivo guarda todo o passo a passo feito no desenvolvimento desta pequena aplicação web. 

### Passo 1 - Subido servidor local.
- Utilizado biblíoteca "express" para subir o servidor
- npm install express --save~
- Documentação: https://expressjs.com/pt-br/starter/installing.html

### Passo 2 - Criado banco de dados local
- Utilizado biblíoteca "sequelize" e "mysql2" para conectar aplicação e trabalhar com banco de dados local
- npm install --save sequelize
- npm install --save mysql2
- Documentação: https://sequelize.org/docs/v6/getting-started/

### Passo 3 - Instalando bibliotecas para exibir dados do banco de dados no front-end
- Utilizado biblioteca "handlebars" para exibir as consultas do banco de dados no front-end da aplicação
- npm install --save express-handlebars
- Documentação: https://handlebarsjs.com/installation/#npm-or-yarn-recommended
- Criação da pasta "views" onde ficarão todos os arquivos do front-end da aplicação
- Criação da pasta "templates" dentro da pasta "views" onde ficará o arquivo raiz da aplicação "main.handlebars"