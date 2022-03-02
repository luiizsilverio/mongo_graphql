const User = require('./User')

const users = [
  { id: 1, name: 'Luiz', email: 'luiiz.silverio@gmail.com'},
  { id: 1, name: 'Diego', email: 'diego@rocketseat.com'}
]

module.exports = {
  Query:  {
    users: () => User.find(),
    user: ( _, { id } ) => User.findById(id)
  },

  Mutation: {
    createUser: ( _, { name, email }) => User.create({ name, email })
  }
}