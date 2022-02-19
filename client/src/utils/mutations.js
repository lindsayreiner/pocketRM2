import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const SAVE_CONNECTION = gql`
  mutation saveConnection($connectionData: ConnectionInput!) {
    saveConnection(connectionData: $connectionData) {
      _id
      email
      savedConnections {
        connectionId
        firstName
        lastName
        metAt
        hometown
        relationship
        email
        phone
        address
        birthday
        occupation
        company
        partner
        partnerName
        anniversary
        children
        childName
        childBirthday
        pets
        petName
        interestsHobbies
        importantDatesTitle
        importantDatesDate
        giftIdeas
      }
    }
  }
`;

export const REMOVE_CONNECTION = gql`
  mutation removeBook($connectionId: ID!) {
    removeConnection(connectionId: $connectionId) {
      _id
      email
      savedConnections {
        connectionId
        firstName
        lastName
        metAt
        hometown
        relationship
        email
        phone
        address
        birthday
        occupation
        company
        partner
        partnerName
        anniversary
        children
        childName
        childBirthday
        pets
        petName
        interestsHobbies
        importantDatesTitle
        importantDatesDate
        giftIdeas
      }
    }
  }
`;