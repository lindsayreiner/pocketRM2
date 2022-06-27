const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    connectionCount: Int
    savedConnections: [Connection]
}

type Connection {
    connectionId: ID!
    firstName: String!
    lastName: String!
    metAt: String!
    relationship: String
    email: String
    phone: String
    address: String
    birthday: String
    occupation: String
    giftIdeas: String
}

type Auth {
    token: ID!
    user: User
  }

input ConnectionInput {
    connectionId: String
    firstName: String!
    lastName: String!
    metAt: String!
    relationship: String
    email: String
    phone: String
    address: String
    birthday: String
    occupation: String
    giftIdeas: String
}

type Query {
    me: User
    connection(connectionId: ID!): Connection
  }

  type Mutation {
    loginUser(email: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String! email: String!, password: String!): Auth
    saveConnection(connectionData: ConnectionInput!): User
    removeConnection(connectionId: ID!): User
  }
`

module.exports = typeDefs;