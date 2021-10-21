import * as React from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';

import { Text, View } from '../components/Themed';
import FeedDisp from '../components/FeedDisplay';
import { gql, useQuery } from '@apollo/client';
import { getProfile } from '../src/graphql/queries';
import { getFeedType } from '../src/graphql/queries';
import { getPost } from '../src/graphql/queries';
import { getProfilePageDetails } from '../src/graphql/custom-queries';





export default function TabOneScreen() {

    const { loading, error, data } = useQuery(gql`${getProfilePageDetails}`, {
        variables: { id: "1" }
    });
    if (loading) return  null;
    if (error)  return `Error! ${error}`; 
    const profile = data.getProfileV3; 
    
    console.log(data);


function displayPost() {
    return profile.ProfileToPosts.items.map ((posts) =>
    { return (posts.post + "\n");  
    });

}
function displayFeed() {
   return profile.ProfileToFeedTypes.items.map ((feeds) =>
    { return (feeds.feedName + " \n ");  
    }); 
  /*  let feedName = "";
    for (let i = 0; i < profile.ProfileToFeedTypes.items.length; i++) 
    {
        return (profile.ProfileToFeedTypes.items[i].feedName+ "\n");
      } 
*/   
}


function displayFollowing() {
    /*
    return profile.ProfileToFeedTypes.items.FeedTypeToFollowing.items.length.map ((following) =>
    { return (following);  
    }); */
   for (let i = 0; i < 3 ; i++) 
    {
        return (profile.ProfileToFeedTypes.items[i].FeedTypeToFollowing.items.length.toString([2]) + "\n");
      } 

} 

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
                   <FeedDisp feedName = {displayFeed()} followers = {displayFollowing} />
 
                </ScrollView>
            </View>
          <View style={{ flex: 7, backgroundColor: 'gainsboro'}}>
                <Text style={styles.pageTextLeft}>Recent Posts:</Text>
                <Text style={styles.pageTextLeft}>{displayPost()} </Text>
                   
           
                
            

            </View>
    </View>
  );
}
    /** 
                    <Text style={styles.pageTextLeft}>{profile.ProfileToPosts.items[1].post}</Text> 
                      <FeedDisp feedName= {profile.ProfileToFeedTypes.items[0].feedName} followers={profile.ProfileToFeedTypes.items[0].FeedTypeToFollowing.items.length} />
                                    <FeedDisp feedName={profile.ProfileToFeedTypes.items[1].feedName} followers={profile.ProfileToFeedTypes.items[1].FeedTypeToFollowing.items.length} />
                    <FeedDisp feedName={profile.ProfileToFeedTypes.items[2].feedName} followers={profile.ProfileToFeedTypes.items[2].FeedTypeToFollowing.items.length} />
                    */
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

