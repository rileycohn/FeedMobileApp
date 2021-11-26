import React from 'react';
import { View, Text, Image } from 'react-native';
import { FeedType } from '../../../types'
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';

import Footer from './Footer';
import moment from 'moment';

export type MainContainerProps = {
    feed: FeedType
}

const MainContainer = ({ feed }: MainContainerProps) => (
    <View style={styles.container}>
        <View style = {styles.tweetHeaderContainer}>
            <View style={styles.tweetHeaderNames}>
            <Text style={styles.name}>{feed.user.name}</Text>
            <Text style={styles.username}>@{feed.user.username}</Text>
            <Text style={styles.createdAt}>{moment(feed.createdAt).fromNow()}</Text>
        </View>   
           <Ionicons name={"chevron-down"} size={16} color={'grey'}/>
        </View>
    <View>
        <Text style={styles.content}>{feed.content}</Text>
        {!!feed.image && <Image style ={styles.image} source={{ uri: feed.image}} />}
    </View>
        {/*Username */}
        {/*content*/}
        <Footer tweet={feed}></Footer>

    </View>
)

export default MainContainer;