"use strict";

import React, {useCallback} from "react";
import PropTypes from "prop-types";
import {SafeAreaView, StatusBar} from "react-native";
import {
    Button,
    Divider,
    Layout,
    StyleService,
    TopNavigation,
} from "@ui-kitten/components";

const styles = StyleService.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    layout: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

const SessionScreen = ({navigation}) => {
    const openDashboard = useCallback(() => {
        navigation.navigate("Dashboard");
    }, [navigation]);

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <StatusBar backgroundColor="red" barStyle="dark-content" />
            <TopNavigation title='MyApp' alignment='center'/>
            <Divider/>
            <Layout style={styles.layout}>
                <Button onPress={openDashboard}>OPEN DASHBOARD</Button>
            </Layout>
        </SafeAreaView>
    );
};

SessionScreen.propTypes = {
    navigation: PropTypes.any.isRequired,
};

export default SessionScreen;
