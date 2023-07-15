import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

function HeaderComp({ title, handleNavigate = () => { } }) {
    return (
        <View style={styles.main}>
            <View style={styles.header}>
                <Icon
                    name={"arrow-back"}
                    size={25}
                    style={styles.arrow}
                    onPress={() => handleNavigate()}
                />
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {

    },
    header: {
        backgroundColor: "#61dafb",
        paddingTop: 50,
        paddingBottom: 10,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    arrow: {
        paddingLeft: 10,
        paddingRight: 10
    },
    title: {
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 25,
        color: "#FFFFFF",
        paddingLeft: 3
    },
})


export default HeaderComp