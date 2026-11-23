import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

// Cliente Apollo
export const client = new ApolloClient({
  link: new HttpLink({ uri: `${process.env.PUBLIC_URL}/graphql` }),
  cache: new InMemoryCache(),
});
