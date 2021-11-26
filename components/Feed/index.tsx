import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { getProfilePageDetails } from '../../src/graphql/custom-queries';

const Feed = () => {

    // Replace this with a custom query to get posts from users the signed in user follows
    const { loading, error, data } = useQuery(gql`${getProfilePageDetails}`, {
        variables: { id: '1' }
    });
    if (loading) return  null;
    if (error)  return `Error! ${error}`;
    const profile = data.getProfileV3;
    console.log(data);

    // TODO: postDate is not a real key, fix this
    return profile.ProfileToPosts.items.map((posts: { post: string; postDate: string }) => (
        <>
            <li key={posts.postDate}>{posts.post}</li>
        </>
    ));
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
