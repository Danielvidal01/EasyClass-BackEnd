# EasyClass-BackEnd

# NODEJS + EXPRESS + SEQUELIZE + POSTGRESQL + NODEMON + BCRYPT // COM MIGRATIONS 


como faço para reproduzir esta aplicação na minha maquina caso ela não esteja no ar?

    bom, para evitar um trafego muito grande, a pasta node_modules que é uma pasta 
    advinda do nosso nodeJS para a utilização de certos recursos, fica de fora do
    repositorio no GIT, alem disso, é nessesario instalar os repositorios para os 
    modulos usados nesse projetos, como o bcrypt, que vai criptografar nossas 
    senhas, o Express, que é o micro-framework simplificador de servidor e 
    das rotas(alem de posibilitar o uso de middlewares), o nodemon que vai 
    verificar cada salvamento do projeto, e vai rodar o servidor novamente, 
    alem do nosso banco de dados, o PostgreSQL, e o Sequelize nosso ORM(basicamente 
    nos ajuda a trabalhar mais facilmente com banco de dados.)


pode se utilizar tanto o NPM quanto o yarn:
  
  //para o node_modules

    npm init  

  //para o express
    
    npm install express
  
  //para o nodemon

    npm install nodemon

  //para o postgreeSQL
    
    npm install pg
    npm install pg-hstore

  //para o sequelize

    npm install sequelize
    npm install sequelize-cli

  //para o bcrypt

    npm install bcrypt



Como faço para utilizar as migrations?

    de um jeito bem simplificado, as migrations são como models pre-definidos ( não se enegane, ainda é nessesario utilizar um model ) e elas servem para evitar conflitos de equipe, ou seja, é um GIT de banco de dados.
    cada migration feita, é salvo o nome e a data/hora .
    sempre cada migration vai ter que "fazer algo" e depois "desfazer", isso vai nos ajudar no caso de erros, ou caso precisemos fazer alguma modificação do banco de dados.
    o intuito aqui não é explicar cada detalhe das migrations, para isso pode se utilizar a DOCUMENTAÇÃO do sequelize, aqui eu so irei deixar (de bandeja inclusive) os comandos mais utilizados no nosso sequelize CLI.

    criando uma migration:

        Yarn sequelize migration:create --name=create-users

//depois que editado o UP e o DOWN (os metodos de fazer e desfazer)

    rodando a migration para o banco:

    	Yarn sequelize db:migrate.
    
    deu algo errado?

        Yarn sequelize db:migrate:undo



