import * as React from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';

import { Text, View } from '../components/Themed';
import FeedDisp from '../components/FeedDisplay';
import { gql, useQuery } from '@apollo/client';
import { getProfilePageDetails } from '../src/graphql/custom-queries';






export default function TabOneScreen() {


        
        


        const { loading, error, data } = useQuery(gql`${getProfilePageDetails}`, {
            variables: { id: "1" }
        });
        if (loading) return  null;
        if (error)  return `Error! ${error}`; 
        const profile = data.getProfileV3; 

        console.log(data);

 
    return (
        <View style={styles.container}>
            <View style={{ flex: 3, flexDirection: 'row' }}>
                <Image source={require('../assets/images/profilePictureExample.jpg')} style={{ flex: 3, borderColor: 'gainsboro', borderWidth:10 }} />
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
                    <FeedDisp feedName= {profile.ProfileToFeedTypes.items[0].feedName} followers={profile.ProfileToFeedTypes.items[0].FeedTypeToFollowing.items.length} />
                    <FeedDisp feedName='Feed2' followers='113' />
                    <FeedDisp feedName='Feed3' followers='62' />
                </ScrollView>
            </View>
            <View style={{ flex: 7, backgroundColor: 'gainsboro'}}>
                <Text style={styles.pageTextLeft}>Recent Posts:</Text>
                <Text style={styles.pageTextLeft}>{profile.ProfileToPosts.items[0].post}</Text>
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