import { StyleSheet } from "react-native";
import Colors from '../../constants/Colors';
const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.light.tint,
        position: 'absolute', // allows to always be on the screen
        bottom: 20,
        right: 25,
        width: 60,
        height: 60,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default styles;