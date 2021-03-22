import {useEffect, useState} from "react";
import * as React from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';

import { Text, View } from '../components/Themed';
import FeedDisp from '../components/FeedDisplay';

import { API, graphqlOperation, GraphQLResult } from '@aws-amplify/api';
import {Profile} from "../src/API";
import * as APIt from '../src/API';

import * as queries from '../src/graphql/queries';
import * as customQueries from '../src/graphql/custom-queries';


export default function ProfileScreen() {
    const [profile, setProfile] = useState<APIt.Profile>();
    const [fetchComplete, setFetchComplete] = useState<boolean>(false);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        async function fetchBasicProfileInfo() {
            // Query using a parameter, should take the profile id from Amplify auth
            const getProfileQueryGraphQLResult: GraphQLResult<APIt.GetProfileQuery> =
                await API.graphql(graphqlOperation(queries.getProfile, {id: '1'})) as GraphQLResult<APIt.GetProfileQuery>;
            // check that the response data is present
            if (getProfileQueryGraphQLResult.data) {
                const data: APIt.GetProfileQuery = getProfileQueryGraphQLResult.data as APIt.GetProfileQuery;
                // if the profile data is present
                if (data.getProfile) {
                    return data.getProfile as Profile;
                }
            }
        }

        // call the async API defined above
        fetchBasicProfileInfo().then(result => {
            setProfile(result);
            setFetchComplete(true);
        })

        async function fetchDetailedProfileInfo() {
            // Query using our custom query to get profile information along with recent posts/likes/following
            // id should be the id of the user for the profile page we are rendering
            const getProfileQueryGraphQLResult: GraphQLResult<APIt.GetProfileQuery> =
                await API.graphql(graphqlOperation(customQueries.getProfilePageDetails, {id: '1'})) as GraphQLResult<APIt.GetProfileQuery>;
            // check that the response data is present
            if (getProfileQueryGraphQLResult.data) {
                const data: APIt.GetProfileQuery = getProfileQueryGraphQLResult.data as APIt.GetProfileQuery;
                // if the profile data is present
                if (data.getProfile) {
                    return data.getProfile as Profile;
                }
            }
        }

        // call the async API defined above
        fetchDetailedProfileInfo().then(result => {
            setProfile(result);
            setFetchComplete(true);
        })
    }, [setProfile, setFetchComplete]);

    if (!fetchComplete) {
        return (
            <Text>Put a spinner here while it loads.</Text>
        )
    } else if (profile) {
        let image = profile.profilePic != null ? profile.profilePic : "todo:missing pic path";
        // create a list of the recent posts
        let recentPosts = profile.ProfileToPosts?.items;
        let postComponents: any = [];
        recentPosts?.forEach(post => {
            // create the post object here with all the data returned
            postComponents.push(
                <Text>{post?.post}</Text>
            )
        })
        return (
            <View style={styles.container}>
            <View style={{ flex: 3, flexDirection: 'row' }}>
                <Image source={{uri: image}} style={{ flex: 3, borderColor: 'gainsboro', borderWidth:10 }} />
                <View style={{ flex: 5, justifyContent: 'center', backgroundColor:'gainsboro' }}>
                    <Text style={styles.pageText}>{profile.name}</Text>
                </View>
                <View style={{ flex: 3, justifyContent: 'center', backgroundColor: 'gainsboro' }}>
                    <Text style={styles.pageText}>Posts:10</Text>
                </View>
                <View style={{ flex: 3, justifyContent: 'center', backgroundColor: 'gainsboro', paddingRight:10 }}>
                    <Text style={styles.pageText}>Likes:500</Text>
                </View>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'gainsboro' }}>
                <Text style={styles.pageText}>I am a generic user on the app 'Feed'</Text>
            </View>
            <View style={{ flex: 7, backgroundColor: 'gainsboro'}}>
                <Text style={styles.pageTextLeft}>Feeds:</Text>
                <ScrollView>
                    <FeedDisp feedName='Feed1' followers='57' />
                    <FeedDisp feedName='Feed2' followers='113' />
                    <FeedDisp feedName='Feed3' followers='62' />
                </ScrollView>
            </View>
            <View style={{ flex: 7, backgroundColor: 'gainsboro'}}>
                <Text style={styles.pageTextLeft}>Recent Posts:</Text>
                <View>
                    {postComponents}
                </View>
            </View>
        </View>
        )
    }

    return (
        <>
            <Text>Error loading profile. Please try again</Text>
        </>
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
