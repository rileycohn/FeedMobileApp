import { apisAreAvailable } from 'expo';
import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
//import feeds from '../../data/feeds';
import Tweet from '../FeedPosts';   // HAVING ISSUES RENAMING TO FeedCSS or something in that nature.
import { amazonSignInButton, API, graphqlOperation } from 'aws-amplify';

import { getPostV3, listPostV3s } from '../../src/graphql/queries';
import feeds from '../../data/feeds';
import { gql, useQuery } from '@apollo/client';
import { getProfilePageDetails } from '../../src/graphql/custom-queries';




const Feed = () => {

    const { loading, error, data } = useQuery(gql`${getProfilePageDetails}`, {
        variables: { id: '1' }
    });
    if (loading) return  null;
    if (error)  return `Error! ${error}`;
    const profile = data.getProfileV3;
    console.log(data);

    function displayPost() {
        return profile.ProfileToPosts.items.map ((posts) =>
        { return (posts.post + '\n');
        });
    }
    // const [posts, setPosts] = useState([]);
    // const [loading, setLoading] = useState(true);

    // const fetchPosts = async () => {
    //     setLoading(true);
        
    //     // get posts from backend & set to state
    //     try {
    //         const postsData = await API.graphql(graphqlOperation(listPostV3s));
    //         console.log(postsData);
    //         setPosts(postsData.data.listPostV3s.items);
    //     } catch (e) {
    //         console.log(e);
    //     } finally {
    //         setLoading(false);
    //     }
    // }

    // useEffect(() => {
    //     fetchPosts();
    // }, [])
    // function test1 ()
    // {
    //     <FlatList 
    //             data={Object.values(listPostV3s)}
    //             renderItem={({item})} => {(item)} 
    //             keyExtractor={(item) => listPostV3s.id}
    //             refreshing={loading}
    //             onRefresh={fetchPosts}
    //         />
    // }
    return (
            <View style={{width: "100%"}}>
                {
                    displayPost()
                }
            {/* <FlatList 
                data={Object.values(posts)}
                renderItem={({item}) => (<>({item}) </>)}
                keyExtractor={(item) => item.id}
                refreshing={loading}
                onRefresh={fetchPosts}>
            </FlatList> */}
            </View>
//             <View style={{width: "100%"}}>
//         <FlatList 
//    data={feeds}
//     renderItem={({item}) => <Tweet feed={item} />}
//      keyExtractor={(item) => item.id}
//      refreshing={loading}
//     onRefresh={fetchPosts}
//      />
//      </View>
        );
};


// const Feed = () => (
//     <View style={{width: "100%"}}>
//         <FlatList 
//     data={feeds}
//     renderItem={({item}) => <Tweet feed={item} />}
//     keyExtractor={(item) => item.id}
//     />
//     </View>
// )

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
