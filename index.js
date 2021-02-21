
require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');

const app = express();
const schema = require('./schema');
const resolvers = require('./resolvers');

const DB = require('./models');


app.use(cors());

const server = new ApolloServer({
	typeDefs: schema,
	resolvers,
});
server.applyMiddleware({ app, path: '/graphql' });



DB.authenticate()
	.then(() => {
		app.listen({ port: 8000 }, () => {
			console.log('Apollo Server on http://localhost:8000/graphql');
		});
	}).catch(err => {
		console.error('Unable to connect to the database:', err);
	});
