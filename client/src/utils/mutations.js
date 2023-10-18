import { gql } from '@apollo/client';

export const CREATE_USERS = gql`
  mutation createUsers($email: String, $password: String) {
    createUsers(email: $email, password: $password) {
      _id
      email
      
    }
  }
`;




