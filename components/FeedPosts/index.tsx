import React from 'react';
import { View, Text, Image } from 'react-native';
import LeftContainer from "./LeftContainer";
import MainContainer from "./MainContainer";

import { FeedType } from '../../types';
import feeds from '../../data/feeds';
import styles from './styles';

export type FeedProps = {
    feed: FeedType
}

const Feed = ({ feed }: FeedProps) => (
    <View style={styles.container}>
        {/*<LeftContainer user={tweets.user}/>*/}
        <MainContainer feed={feed} />  
    </View>
)

export default Feed;