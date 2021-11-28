import * as React from 'react';
import { StyleSheet, Image, ScrollView, Button } from 'react-native';

import { Text, View} from '../components/Themed';
import FeedDisp from '../components/FeedDisplay';
import { gql, useQuery } from '@apollo/client';
import { getProfilePageDetails } from '../src/graphql/custom-queries';
import { TextInput } from "react-native";
import { UpdateProfileV3Input, UpdateProfileV3MutationVariables } from '../src/API';
import { client } from '../App';
import { updateProfileV3 } from '../src/graphql/mutations';
import { Auth } from 'aws-amplify';
import { useEffect } from 'react';


export default function TabOneScreen(){

    const [profile, setProfile] = React.useState();
    const [isReady, setIsReady] = React.useState(false);
    const [name, setName] = React.useState("thiscannotbeyourname");
    const [bio, setBio] = React.useState("thiscannotbeyourbio");
    const [editable, setEditable] = React.useState(false);

    useEffect(() => {

        Auth.currentAuthenticatedUser({
            bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
        }).then(user => {
            console.log(user.getUsername())
            client
                .query({
                    query: gql`
                    ${getProfilePageDetails}`,
                    variables: { profileID: user.getUsername() }
                })

                .then(result => {
                    console.log(result)
                    setProfile(result.data.getProfileV3);
                    setIsReady(true)
                });
        }
        )
            .catch(err => console.log(err));
    }, [])

    if (!isReady || !profile) {
        return null
    }

    //handling profile info text inputs with states
    //has error below of "implicit any type" - this does not affect compiling or function

    const handleNameChange = n => {
        setName(n.target.value);
        setEditable(true);
        console.log("name changed");
    }
    const handleBioChange = b => {
        setBio(b.target.value);
        setEditable(true);
        console.log("bio changed")
        console.log(b.target.value);
    }

    function displayPost() {
        return profile.ProfileToPosts.items.map((posts) => {
            return (posts.post + "\n");
        });

    }
    const displayFeed = profile.ProfileToFeedTypes.items.map((feed: any) => {
        return <FeedDisp feedName={feed.feedName} followers={feed.FeedTypeToFollowing.items.length} />
    });

    //handling the save changes button being clicked
    const saveChangesButtonPressed = () => {
        if (editable) {

            if (name == "thiscannotbeyourname") {
                setName(profile.name);
            }
            if (bio == "thiscannotbeyourbio") {
                setBio(profile.bio);
            }

            let input: UpdateProfileV3Input = {
                id: profile.id,
                name: name,
                bio: bio
            }

            console.log("id: " + profile.id);
            console.log("name: " + name);
            console.log("bio: " + profile.bio);

            let variables: UpdateProfileV3MutationVariables = {
                input
            }

            const result = client.mutate({
                mutation: gql`${updateProfileV3}`,
                variables: variables
            }).then(value => { console.log(value) })
                .catch(error => { console.log(error) })

            console.log(result);
        }
    } 


 
    return (
        <View style={styles.container}>
            <View style={{ flex: 3, flexDirection: 'row' }}>
                <Image source={require('../assets/images/profilePictureExample.jpg')} style={{ flex: 3, borderColor: 'gainsboro', borderWidth:10 }} />
                <View style={{ flex: 5, justifyContent: 'center', backgroundColor: 'gainsboro' }}>
                    <TextInput style={styles.pageText} defaultValue={profile.name} onChange={handleNameChange} />
                </View>
                <View style={{ flex: 3, justifyContent: 'center', backgroundColor: 'gainsboro' }}>
                    <Text style={styles.pageText}>Posts:1</Text>
                </View>
                <View style={{ flex: 3, justifyContent: 'center', backgroundColor: 'gainsboro', paddingRight:10 }}>
                    <Text style={styles.pageText}>Likes:500</Text>
                </View>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'gainsboro' }}>
                <TextInput style={styles.pageText} defaultValue={profile.bio} onChange={handleBioChange} />
            </View>
            <Button title="Save Profile Changes" onPress= {saveChangesButtonPressed} />
            <View style={{ flex: 7, backgroundColor: 'gainsboro' }}>
                <Text style={styles.pageTextLeft}>Feeds:</Text>
                <ScrollView>
                    {displayFeed}
                </ScrollView>
                <Button title="Add New Feed" onPress={() => { }} />
            </View>
            <View style={{ flex: 7, backgroundColor: 'gainsboro' }}>
                <Text style={styles.pageTextLeft}>Recent Posts:</Text>
                <Text style={styles.pageTextLeft}>{displayPost()} </Text>
                <Button title="Add New Post" onPress={() => { }} />
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
    },
    
});