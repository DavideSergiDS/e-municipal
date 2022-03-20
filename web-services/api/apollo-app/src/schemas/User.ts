import { gql } from 'apollo-server';

export const TypeDefs = gql`
  "E-Municipal user"
  type User {
    username: String
    email: String
    signUpDate: String,
    photo: Attachment
  }
`;