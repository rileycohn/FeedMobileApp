import { apisAreAvailable } from 'expo';
import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import tweets from '../../data/tweets';
import Tweet from '../Tweet';
import { amazonSignInButton, API, graphqlOperation } from 'aws-amplify';

import { listPosts } from '../../src/graphql/queries';

const Feed = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            // get posts from backend & set to state
            try {
                const postsData = await API.graphql(graphqlOperation(listPosts));
                console.log(postsData);
                setPosts(postsData.data.listPosts.items);
            } catch (e) {
                console.log(e);
            }
        }
        fetchPosts();
    }, [])

    return (
            <View style={{width: "100%"}}>
            <FlatList 
                data={posts}
                renderItem={({item}) => <Tweet tweet={item} />}
                keyExtractor={(item) => item.id}
            />
            </View>
        );
};


export default Feed;


//to get hardcoded data again uncomment this and comment out the top part except imports, uncomment tweets import, and export default Feed; AND place the below code above export default Feed;
// const Feed = () => (
//     <View style={{width: "100%"}}>
//         <FlatList 
//     data={tweets}
//     renderItem={({item}) => <Tweet tweet={item} />}
//     keyExtractor={(item) => item.id}
//     />
//     </View>
// )
