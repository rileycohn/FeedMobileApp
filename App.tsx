import {
    ApolloProvider,
    ApolloClient,
    InMemoryCache,
    ApolloLink
} from "@apollo/client";
// @ts-ignore
import { withAuthenticator } from 'aws-amplify-react-native';
// @ts-ignore
import { createSubscriptionHandshakeLink } from "aws-appsync-subscription-link";
// @ts-ignore
import { createAuthLink } from "aws-appsync-auth-link";
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import Amplify, { Auth } from 'aws-amplify'
import { onError } from 'apollo-link-error';
// @ts-ignore
import config from './aws-exports'
import { createHttpLink } from 'apollo-link-http'

Amplify.configure(config)
function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();
     if (!isLoadingComplete) {
        return null;
     } else {
        return (
            <SafeAreaProvider>
                <Navigation colorScheme={colorScheme} />
                <StatusBar />
            </SafeAreaProvider>
            );
       }
}

const getAccessToken = (): Promise<string> => {
    return Auth.currentSession().then(session => {
        return session.getAccessToken().getJwtToken();
    });
};
console.log("Look here!" + config.aws_appsync_graphqlEndpoint);
const apolloConfig = {
    url: config.aws_appsync_graphqlEndpoint,
    region: config.aws_appsync_region,
    auth: {
        type: config.aws_appsync_authenticationType,
        jwtToken: getAccessToken
    },
    disableOffline: false
};
const link = ApolloLink.from([
    // @ts-ignore
    createAuthLink(apolloConfig),
    // @ts-ignore
    createSubscriptionHandshakeLink(apolloConfig)
]);
export const client = new ApolloClient({
    link,
    cache: new InMemoryCache({ addTypename: false })
});
const AppWithProvider = () => (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);
// Automatic create/sign-in account
export default withAuthenticator(AppWithProvider);



