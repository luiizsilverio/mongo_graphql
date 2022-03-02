const { GraphQLServer } = require("graphql-yoga");
const path = require('path')
const resolvers = require('./resolvers')
const mongoose = require('mongoose')

// conecta o BD 'agenda'
mongoose.connect('mongodb://localhost:27017/graphql', {
  useNewUrlParser: true,
})

// typeDefs são as rotas
// resolvers são os controllers
const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, 'schema.graphql'),
  resolvers: resolvers
})

server.start()
