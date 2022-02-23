import { gql } from '@apollo/client';

export const GET_USER = gql`
{
   query me {
    _id
      firstName
      lastName
      email
    contacts {
        _id
        firstName
        lastName
        birthday
        anniversary
        importantDates
      }
    }
  }
`

export const GET_SINGLE_CONNECTION = gql`
{
    query getSingleConnection($connectionId: ID!) {
    connection(connectionId: $connectionId) {
      _id
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
        metAt
      }
      }
    }
`

export const GET_ALL_CONNECTIONS = gql`
{
query getAllConnections ($userId: ID!)  {
  connections(userID: $userId) {
    connections {
      _id
      firstName
      lastName
    }
  }
  }
}`