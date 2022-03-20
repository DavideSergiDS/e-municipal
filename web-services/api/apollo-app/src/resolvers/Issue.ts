
import { throwHttpGraphQLError } from 'apollo-server-core/dist/runHttpQuery';

export const Resolvers = {
    Query: {
        issues: () => throwHttpGraphQLError(500, []),
    },
};