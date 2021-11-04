import {
    ApolloProvider,
    ApolloClient,
    InMemoryCache,
    ApolloLink,
    gql
} from "@apollo/client";
// @ts-ignore
import { withAuthenticator } from "aws-amplify-react-native";
import { createSubscriptionHandshakeLink } from "aws-appsync-subscription-link";
import { createAuthLink } from "aws-appsync-auth-link";
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import Amplify, { Auth } from 'aws-amplify'
import { Hub } from 'aws-amplify';
import { ProfileV3 } from './models';
import { createProfileV3 } from './src/graphql/mutations';
import { CreateProfileV3Input, ModelProfileV3ConditionInput, CreateProfileV3MutationVariables } from "./src/API";
// @ts-ignore
import config from './aws-exports'

Amplify.configure({
    ...config,
    Analytics: {
        disabled: true
    }
})
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

Hub.listen('auth', (data) => {
    switch (data.payload.event) {
        case 'signUp':

            console.log('Email: ' + data.payload.data.user.username);
            console.log('UserID: ' + data.payload.data.userSub);
            console.log(data)
            //on the signup event - call the function to create the profile entry in the DB
            addProfile(data.payload.data.user.username, data.payload.data.userSub);

            break;

        case 'signIn':
            console.log('the listener heard the sign in event');
            addProfile("rgerner@asu.edu", "UserID");
            break;
    }
});


function addProfile(emailInput: string, idInput: string) {
    //create the profile input
    let input: CreateProfileV3Input = {
        email: emailInput,
        id: idInput,
        name: 'PLACEHOLDER'
    };

    //Create the variable object for the create profile
    let variables: CreateProfileV3MutationVariables = {
        input
    }

    // Run the mutation and store the result
    const result = client.mutate({
        mutation: gql`${createProfileV3}`,
        variables: variables,
    }).then(value => { console.log(value) })
        .catch(error => { console.log(error) })

    console.log(result);
}
