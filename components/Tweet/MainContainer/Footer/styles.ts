import { StyleSheet, StyleSheetProperties } from "react-native";

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: 5

    },
    number: {
        color: 'grey',
        marginLeft: 5,
        textAlign: 'center'
    },
    iconContainer: {
        flexDirection: "row",
        alignItems: "center"
    }
});

export default styles;