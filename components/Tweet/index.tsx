import React from 'react';
import { View, Text, Image } from 'react-native';
import LeftContainer from "./LeftContainer";
import MainContainer from "./MainContainer";

import { TweetType } from '../../types';
import tweets from '../../data/tweets';
import styles from './styles';

export type TweetProps = {
    tweet: TweetType
}

const Tweet = ({ tweet }: TweetProps) => (
    <View style={styles.container}>
        {/*<LeftContainer user={tweets.user}/>*/}
        <MainContainer tweet={tweet} />  
    </View>
)

export default Tweet;