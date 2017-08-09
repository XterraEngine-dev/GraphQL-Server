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
    console.log('server is running on port 4000..');
});