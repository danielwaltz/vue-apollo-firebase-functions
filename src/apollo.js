import Vue from 'vue';
import VueApollo from 'vue-apollo';
import { createApolloClient } from 'vue-cli-plugin-apollo/graphql-client';

Vue.use(VueApollo);

const defaultEndpoint = `${process.env.BASE_URL}/graphql`;
const httpEndpoint = process.env.VUE_APP_GRAPHQL_HTTP || defaultEndpoint;
const { apolloClient } = createApolloClient({ httpEndpoint });
const apolloProvider = new VueApollo({ defaultClient: apolloClient });

export default apolloProvider;
