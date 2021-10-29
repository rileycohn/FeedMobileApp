import * as React from 'react';
import { StyleSheet, TextInput, SafeAreaView} from 'react-native';
import { API, Auth, graphqlOperation } from 'aws-amplify';

import { Text, View } from '../components/Themed';
import { AntDesign } from '@expo/vector-icons';
import Colors from "../constants/Colors";
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useEffect, useState} from "react";
import { createPostV3 as createFeed } from '../src/graphql/mutations';
import { useNavigation } from '@react-navigation/native';
import { CreatePostV3Input } from '../src/API';
import * as uuid from 'uuid';

export default function NewFeedScreen() {     // DOUBLE CHECK THIS WORKEDDDDDDDD

    const [feed, setFeed] = useState("");

    const navigation = useNavigation();

    useEffect(() => {
       console.log("Loading new feed screen");
    });

    const onPost = async () => {
        console.log('Posting the Feed:', feed);
        let idNum = uuid.v4();
        try {
          const currentUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
          console.log(currentUser);
          
          // create if-statement to automatic update id
          const feedInput : CreatePostV3Input = {
            id: String(idNum),
            profileID: currentUser.username,
            feedTypeID: '1',
            postDate: null,
            tags: null,
            post: feed // this is what is the actual Feed post that will appear in DB and on the homepage of what user says
           
            // content: post,
            // //image: imageUrl,
            // userID: currentUser.attributes.sub,
          }
          navigation.goBack();
          // bottom line goes first before top line, but not working...
          await API.graphql(graphqlOperation(createFeed, { input: feedInput }));

        } catch (e) {
          console.log(e);
        }
    }
  return (
    <SafeAreaView style={styles.container}>
       <View style={styles.headerContainer}>
         <TouchableOpacity onPress={() => navigation.goBack()}>
         <AntDesign name="close" size={30} color={Colors.light.tint}/>
         </TouchableOpacity>
         <TouchableOpacity style={styles.button} onPress={onPost}>
             <Text style={styles.buttonText}>Feed</Text>
         </TouchableOpacity>
       </View>
       <View style={styles.inputsContainer}>
           <TextInput
           value={feed}
           onChangeText={(value :string ) => {
               console.log("updating value of feed " + feed);
               setFeed(value)
           }}
           multiline={true}
           numberOfLines={3}
           placeholder={"What to Feed?"}
           />
       </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: 'white'
  },

headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
},

button: {
    backgroundColor: Colors.light.tint,
    borderRadius: 30,
},

buttonText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
},

inputsContainer: {
    marginLeft: 10,
},

feedInput: {
    height: 100,
    maxHeight: 300,
    fontSize: 20 //not changing for some reason
}
});