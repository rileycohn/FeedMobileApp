import * as React from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';

import { Text, View } from '../components/Themed';
import FeedDisp from '../components/FeedDisplay';
import { gql, useQuery } from '@apollo/client';
import { getProfile } from '../src/graphql/queries';
import { getFeedType } from '../src/graphql/queries';
import { getPost } from '../src/graphql/queries';
import { getProfilePageDetails } from '../src/graphql/custom-queries';

import Auth, { CognitoUser } from '@aws-amplify/auth';
import { useEffect } from 'react';
import { AuthClass } from '@aws-amplify/auth/lib-esm/Auth';
import { isUsernamePasswordOpts,CurrentUserOpts } from '@aws-amplify/auth/lib-esm/types';
import { Amplify, Hub } from 'aws-amplify';
import { UserInterfaceIdiom } from 'expo-constants';
import { client } from '../App';



export default function TabOneScreen() {


      const[profile, setProfile] = React.useState();
      const[isReady, setIsReady] = React.useState(false);

        
        useEffect(() => {
            

        Auth.currentAuthenticatedUser({
            bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
        }).then(user => {
            
            console.log(user.getUsername())
            client
            .query({
              query: gql`
                   ${getProfilePageDetails}`, 
                   variables : { profileID: user.getUsername()}
            })

            .then(result => {console.log(result)
                setProfile(result.data.getProfileV3); 
                setIsReady(true)});
        }
            )
        .catch(err => console.log(err));

       
        
         }, [])



 if(!isReady || !profile)
{ 
    return null
}


    function displayPost() {
        return profile.ProfileToPosts.items.map ((posts) =>
        { return (posts.post + "\n");  
        });

    }


const displayFeed =  profile.ProfileToFeedTypes.items.map((feed: any) => {
    return <FeedDisp feedName={feed.feedName} followers={feed.FeedTypeToFollowing.items.length}/> 
 });

    return (
        <View style={styles.container}>
            <View style={{ flex: 8, flexDirection: 'row' }}>
                <Image source={require('../assets/images/Abdullah.JPG')} style={{ flex: 3, borderColor: 'gainsboro', borderWidth:15 }} />
                <View style={{ flex: 5, justifyContent: 'center', backgroundColor: 'gainsboro' }}>
                    <Text style={styles.pageText}>{profile.name}</Text>
                </View>
                <View style={{ flex: 3, justifyContent: 'center', backgroundColor: 'gainsboro' }}>
                    <Text style={styles.pageText}>Posts</Text>
                </View>
                <View style={{ flex: 3, justifyContent: 'center', backgroundColor: 'gainsboro', paddingRight:10 }}>
                    <Text style={styles.pageText}>Likes:500</Text>
                </View>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'gainsboro' }}>
            
                <Text style={styles.pageText}>{profile.bio}</Text>
            </View>
            <View style={{ flex: 7, backgroundColor: 'gainsboro'}}>
                <Text style={styles.pageTextLeft}>Feeds:</Text>
                <ScrollView>
                    {displayFeed}
                </ScrollView>
            </View>
          <View style={{ flex: 7, backgroundColor: 'gainsboro'}}>
                <Text style={styles.pageTextLeft}>Recent Posts:</Text>
                <Text style={styles.pageTextLeft}>{displayPost()} </Text>
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    },
    pageText: {
        textAlign: "center",
        color: "darkslategrey",
        fontSize: 20,
    },
    pageTextLeft: {
        textAlign: "left",
        color: "darkslategrey",
        fontSize: 20,
        paddingTop: 10,
        paddingLeft: 10,
    }
    
});

function currentUserInfo() {
    throw new Error('Function not implemented.');
}

