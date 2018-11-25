const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./Schema/schema');

const app = express();

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));

const port = process.env.PORT || 4000;

app.listen(`${port}`, () => {
    console.log(`Server is running on Port ${port}`)
});