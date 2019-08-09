// O código abaixo serve pra criar um server local pra rodar a aplicação

const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://Nectisu:6328478@cluster0-76xlk.mongodb.net/oministack?retryWrites=true&w=majority',{
    useNewUrlParser: true
});

server.use(express.json());
server.use(routes);

server.listen(3333);