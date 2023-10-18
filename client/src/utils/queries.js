import { gql } from '@apollo/client';



export const QUERY_USERS = gql`
  query users($_id: String) {
    users(_id: $_id) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`;
