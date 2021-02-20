const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');

const app = express();
const schema = require('./schema');
const resolvers = require('./resolvers');
const [ me ] = require('./models/user');


app.use(cors());

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
      me
  }
});
server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8000 }, () => {
  console.log('Apollo Server on http://localhost:8000/graphql');
});