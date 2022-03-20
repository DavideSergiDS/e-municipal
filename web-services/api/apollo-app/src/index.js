"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const issues_1 = require("./schemas/issues");
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new apollo_server_1.ApolloServer({ typeDefs: issues_1.issueTypeDefs, resolvers: issues_1.issueResolvers });
// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
