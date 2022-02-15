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
    hometown: String
    relationship: String
    email: String
    phone: String
    address: String
    birthday: String
    occupation: String
    company: String
    partner: Boolean
    partnerName: String
    anniversary: String
    children: Boolean
    childName: String
    childBirthday: String
    pets: Boolean
    petName: String
    interestsHobbies: String
    importantDatesTitle: String
    importantDatesDate: String
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
    hometown: String
    relationship: String
    email: String
    phone: String!
    address: String
    birthday: String
    occupation: String
    company: String
    partner: Boolean
    partnerName: String
    anniversary: String
    children: Boolean
    childName: String
    childBirthday: String
    pets: Boolean
    petName: String
    interestsHobbies: String
    importantDatesTitle: String
    importantDatesDate: String
    giftIdeas: String
}

type Query {
    me: User
    connection(connectionId: ID!): Connection
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String! email: String!, password: String!): Auth
    saveConnection(connectionData: ConnectionInput!): User
    removeConnection(connectionId: ID!): User
  }
`

module.exports = typeDefs;