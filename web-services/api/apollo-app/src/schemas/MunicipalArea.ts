import { gql } from 'apollo-server';

export const TypeDefs = gql`
  "E-municipal area model"
  type MunicipalArea {
    name: String,
    city: String,
    province: String,
    region: String,
    state: String
  }
`;