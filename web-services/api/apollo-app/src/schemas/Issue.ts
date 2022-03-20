import { gql } from 'apollo-server';

export const TypeDefs = gql`
  "E-municipal issue model"
  type Issue {
    title: String
    description: String
    creationDate: String,
    lastUpdateDate: String,
    attachments: [Attachment],
    author: User,
    municipalArea: MunicipalArea
    status: Status
  }

  "Issue enumeration status"
  enum Status {
    CREATED
    ACCEPTED
    IN_PROGRESS
    IDLE
    CLOSED
  }

  "Query for Issue data source"
  type Query {
    issues: [Issue!]!
  }
`;
