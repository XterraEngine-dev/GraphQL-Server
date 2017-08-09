const express = require('express');
const expressGraphQL = require('express-graphql')
const schema = require('./schema.js');

const app = express();

app.use('/graphql',expressGraphQL({
    schema:schema,
    graphiql:true
}));

var port = process.env.PORT || 5000;

app.listen(port,() =>{
    console.log('server is running ');
});
//heroku
var jsonServer = require('json-server');
var server = jsonServer.create();
var router = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();
var port = Number(process.env.PORT || 3000);
server.use(middlewares);
server.use(router);
server.listen(port, function () {
  console.log('JSON Server is running')
});