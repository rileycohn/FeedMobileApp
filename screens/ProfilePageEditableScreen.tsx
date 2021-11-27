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


export default function TabOneScreen(){

    const currentUser = Auth.currentAuthenticatedUser({ bypassCache: true });

    const { loading, error, data } = useQuery(gql`${getProfilePageDetails}`, {
        variables: {id:"1"}
    });
    if (loading) return  null;
    if (error)  return `Error! ${error}`; 
    const profile = data.getProfileV3; 


    //handling profile info text inputs with states
    //has error below of "implicit any type" - this does not affect compiling or function
    const [name, setName] = React.useState(profile.name);
    const [bio, setBio] = React.useState(profile.bio);

    const handleNameChange = n => {
        setName(n.target.value);
    }
    const handleBioChange = b => {
        setBio(b.target.value);
    }

    //handling the save changes button being clicked
    const saveChangesButtonPressed = () => {

        let input: UpdateProfileV3Input = {
            id: "4fe242b4-e29e-4f9e-bc29-a42bfb51a3e6",
            name: name,
            bio: bio
        }

        let variables: UpdateProfileV3MutationVariables = {
            input
        }

        const result = client.mutate({
            mutation: gql`${updateProfileV3}`,
            variables: variables
        }).then(value => { console.log(value) })
            .catch(error => { console.log(error) })

        console.log(result);
        console.log(error);
    } 


    console.log(data);

 
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
            <View style={{ flex: 7, backgroundColor: 'gainsboro'}}>
                <Text style={styles.pageTextLeft}>Feeds:</Text>
                <ScrollView>
                    <FeedDisp feedName= {profile.ProfileToFeedTypes.items[0].feedName} followers={profile.ProfileToFeedTypes.items[0].FeedTypeToFollowing.items.length} />
                    <FeedDisp feedName='Feed2' followers='113' />
                    <FeedDisp feedName='Feed3' followers='62' />
                </ScrollView>
                <Button title="Add New Feed" onPress={() => { }} />
            </View>
            <View style={{ flex: 7, backgroundColor: 'gainsboro'}}>
                <Text style={styles.pageTextLeft}>Recent Posts:</Text>
                <Text style={styles.pageTextLeft}>{profile.ProfileToPosts.items[0].post}</Text>
                <Button title="Add New Post" onPress={() => { }}/>
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