import * as React from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';

import { Text, View } from '../components/Themed';
import FeedDisp from '../components/FeedDisplay';
import { gql, useQuery } from '@apollo/client';
import { getProfile } from '../src/graphql/queries';
import { getFeedType } from '../src/graphql/queries';
import { getPost } from '../src/graphql/queries';





export default function TabOneScreen() {

        
        const { loading, error, data } = useQuery(gql`${getProfile}`, {
            variables: { id: "1" }
        });
        if (loading) return  null; 
        if (error)  return `Error! ${error}`; 

    const profile = data.getProfile;
    console.log(data);

    return (
        <View style={styles.container}>
            <View style={{ flex: 3, flexDirection: 'row' }}>
                <Image source={require('../assets/images/profilePictureExample.jpg')} style={{ flex: 3, borderColor: 'gainsboro', borderWidth:10 }} />
                <View style={{ flex: 5, justifyContent: 'center', backgroundColor: 'gainsboro' }}>
                    <Text style={styles.pageText}>{profile.name}</Text>
                </View>
                <View style={{ flex: 3, justifyContent: 'center', backgroundColor: 'gainsboro' }}>
                    <Text style={styles.pageText}>Post</Text>
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
