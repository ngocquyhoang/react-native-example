"use strict";

import React, {useCallback} from "react";
import PropTypes from "prop-types";
import {SafeAreaView, StatusBar} from "react-native";
import {
    Divider,
    Icon,
    Layout,
    Text,
    StyleService,
    TopNavigation,
    TopNavigationAction,
    Button,
} from "@ui-kitten/components";

import ThemeContext from "../theme-context";
const themeInformation = React.useContext(ThemeContext);

const styles = StyleService.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: themeInformation.theme === "light" ? "#FFFFFF" : "#222B45",
    },
    layout: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' />
);

const DashboardScreen = ({navigation}) => {
    const navigateBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    const backAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
    );

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <StatusBar backgroundColor="red" barStyle={themeInformation.theme === "light" ? "dark-content" : "light-content"} />
            <TopNavigation title='MyApp' alignment='center' leftControl={backAction()}/>
            <Divider/>
            <Layout style={styles.layout}>
                <Text category='h1'>DASHBOARD</Text>
                <Button onPress={themeInformation.toggleTheme}>TOGGLE THEME</Button>
            </Layout>
        </SafeAreaView>
    );
};

DashboardScreen.propTypes = {
    navigation: PropTypes.any.isRequired,
};

export default DashboardScreen;
