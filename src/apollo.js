import Vue from 'vue';
import VueApollo from 'vue-apollo';
import { createApolloClient } from 'vue-cli-plugin-apollo/graphql-client';

Vue.use(VueApollo);

const defaultEndpoint = `${process.env.BASE_URL}/graphql`;
const httpEndpoint = process.env.VUE_APP_GRAPHQL_HTTP || defaultEndpoint;
const defaultOptions = { httpEndpoint };

export function createProvider(options = {}) {
  const { apolloClient, wsClient } = createApolloClient({
    ...defaultOptions,
    ...options,
  });
  apolloClient.wsClient = wsClient;

  const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
    defaultOptions: {
      $query: {
        fetchPolicy: 'cache',
      },
    },
    errorHandler(error) {
      // eslint-disable-next-line no-console
      console.log(
        '%cError',
        'background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;',
        error.message
      );
    },
  });

  return apolloProvider;
}
