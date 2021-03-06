import React from "react";
import {Platform, StyleSheet, Text, View} from "react-native";

const instructions = Platform.select({
    ios: "Press Cmd+R to reload,\nCmd+D or shake for dev menu",
    android: "Double tap R on your keyboard to reload,\nShake or press menu button for dev menu",
});

const appColors = {
    "primary": "#F5FCFF",
    "secondary": "#333333",
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: appColors.primary,
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    },
    instructions: {
        textAlign: "center",
        color: appColors.secondary,
        marginBottom: 5,
    },
});

const App = () => (
    <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
    </View>
);

/**
 * React default App module.
 * @return {View} Render view.
 */
export default App;
