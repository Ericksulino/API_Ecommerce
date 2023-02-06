// inportando bibliotecas
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require('path');
const dotenv = require('dotenv')


//config do dotenv -variaveis de ambiente
dotenv.config();


//rota com o front
const routes = require("./src/routes/front.route")


//Rotas backend 

//usuario
const userRoute = require("./src/routes/user.route");

//login
const authRote = require("./src/routes/auth.route");

//mensagem de contato
const messageRoute = require("./src/routes/message.route");

//Rota com o Banco de dados
const connectDatabase = require("./src/database/db")

//Propriedades do servidor
const app = express();
const port = process.env.PORT || 5000;


app.set('view engine', 'ejs');
//app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/src/views'));

app.use(express.static(__dirname + '/src/views'));
app.use(express.static(__dirname + '/src/views/scripts'));
app.use(express.static(__dirname + '/src/views/img'));

app.use(session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: false
}));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Conexão com o Banco de dados
//connectDatabase()

//Rotas do backend
app.use("/user",userRoute);
app.use("/msg",messageRoute);
app.use("/auth",authRote);

// Rotas do frontend
app.use(routes);

//pegando o ip
const os = require('os');

const interfaces = os.networkInterfaces();
const addresses = [];
for (const k in interfaces) {
    for (const k2 in interfaces[k]) {
        const address = interfaces[k][k2];
        if (address.family === 'IPv4' && !address.internal) {
            addresses.push(address.address);
        }
    }
}

// Cria um servidor HTTP e uma escuta de requisições para a porta 8000
app.listen(port,()=>{
    // Imprime no console a URL de acesso ao servidor
    console.log('Servidor executando em: '+addresses+':'+port+'');
});