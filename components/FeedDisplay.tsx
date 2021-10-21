import React from 'react';
import { StyleSheet, TouchableOpacity, } from 'react-native';
import { Text, View } from './Themed';

export default function FeedDisp({ feedName, followers }: { feedName: string, followers: string } ) {
    return (
        <View style={styles.container}>
            <View style={styles.nameView}>
                <Text style={styles.nameText}> {feedName} </Text>
            </View> 
            <View style={styles.followersView}>
                <Text style={styles.followersText}> Followers: {followers} </Text>
            </View>
            <View style={styles.followButtonView}>
                <Text style={styles.followButtonText}> Follow </Text>
            </View> 
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 3,
        paddingHorizontal: 10,
        flexDirection: 'row',
        flex: 1,
        backgroundColor: "gainsboro",
        height: 40,
    },
    nameView:{
        flex: 2,
        justifyContent: "center",
        backgroundColor: "lightslategrey",
        borderLeftWidth: 2,
        borderLeftColor: "slategrey",
        borderBottomWidth: 2,
        borderBottomColor: "slategrey",
        borderTopWidth: 2,
        borderTopColor: "slategrey",
    },
    nameText: {
        textAlign: "center",
        color: "darkslategrey",
        fontSize: 20,
    },
    followersView: {
        flex: 5,
        justifyContent: "center",
        backgroundColor: "lightslategrey",
        borderBottomWidth: 2,
        borderBottomColor: "slategrey",
        borderTopWidth: 2,
        borderTopColor: "slategrey",
    },
    followersText: {
        textAlign: "center",
        color: "darkslategrey",
        fontSize: 20,
    },
    followButtonView: {
        flex: 3,
        justifyContent: "center",
        backgroundColor: "lightslategrey",
        borderRightWidth: 2,
        borderRightColor: "slategrey",
        borderBottomWidth: 2,
        borderBottomColor: "slategrey",
        borderTopWidth: 2,
        borderTopColor: "slategrey",
    },
    followButtonText: {
        textAlign: "center",
        color: "darkslategrey",
        fontSize: 20,
    },

});