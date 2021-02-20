const { gql } = require('apollo-server-express');

module.exports =   gql`
  extend type Query {
    users: [User!]
    user(id: ID!): User
    me: User
}
  type User {
    id: ID!
    username: String!
    fullname: String
    email: String
    gender: String
    ip_address: String
    country: String,
    height: Int,
    age: Int
    account: Account
    messages: [Message!]
  }

  type Account {
      name: String,
      type: String,
      number: String
  }
`;