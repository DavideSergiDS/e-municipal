import { gql } from 'apollo-server';

export const TypeDefs = gql`
  "Media attachment"
  type Attachment {
    url: String
  }
`;
