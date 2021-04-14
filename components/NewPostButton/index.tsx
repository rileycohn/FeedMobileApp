import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const NewPostButton = () => {

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('NewPostScreen');
        //console.warn('This button works when pressed!(:');
    }
    return (
    <TouchableOpacity 
    activeOpacity={0.8} // allows transparency when pressing down on button
    style={styles.button} 
    onPress={onPress}>
        <MaterialCommunityIcons name={"feather"} size={30} color="white" />
    </TouchableOpacity>
  )
}
export default NewPostButton;