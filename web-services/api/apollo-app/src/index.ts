import { merge } from 'lodash';
import { ApolloServer } from 'apollo-server';
import { makeExecutableSchema } from 'graphql-tools';
import { Resolvers as IssueResolvers } from './resolvers/Issue';
import { TypeDefs as IssueTypeDef } from "./schemas/Issue";
import { TypeDefs as MunicipalAreaTypeDef } from "./schemas/MunicipalArea";
import { TypeDefs as UserTypeDef } from "./schemas/User";
import { TypeDefs as AttachmentTypeDef } from "./schemas/Attachment";
import { mocks } from './mock/Mocks';

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const schema = makeExecutableSchema({
  typeDefs: [ IssueTypeDef, MunicipalAreaTypeDef, UserTypeDef, AttachmentTypeDef ],
  resolvers: merge({}, IssueResolvers),
});
const server = new ApolloServer({schema, mocks:mocks});

// The `listen` method launches a web server.
server.listen().then(({ url } : any) => {
  console.log(`🚀  Server ready at ${url}`);
});
