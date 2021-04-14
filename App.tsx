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
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify'
import config from './aws-exports'
import { getProfile } from './src/graphql/queries'
import { createProfile } from './src/graphql/mutations'
Amplify.configure(config)
function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const saveUserToDB = async (user) => {
    console.log(user);
    await API.graphql(graphqlOperation(createProfile), { input: user })
  }

  useEffect( () => {
    const updateUser = async () => {
      // Get current auth user
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
      console.log(userInfo);

      // Check if user exists in DB
      if(userInfo) {
        const userData = await API.graphql(graphqlOperation(getProfile, { id: userInfo.attribute.sub }));
        console.log(userData)
        if(!userData.data.getUser) {
          const user = {
            id: userInfo.attributes.sub,
            username: userInfo.username,
            name: userInfo.username,
            email: userInfo.attributes.email,
            //image:
          }
          await saveUserToDB(user);
        } else{
          console.log("User already exists");
        }
      }

      // if not, create user in DB
    }
    updateUser();
  }, [])

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

export default withAuthenticator(App); //add (App, true) true for sign out to appear
