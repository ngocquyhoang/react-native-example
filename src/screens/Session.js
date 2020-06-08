"use strict";

import React, {useCallback} from "react";
import PropTypes from "prop-types";
import {SafeAreaView} from "react-native";
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
    },
    layout: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

const SessionScreen = ({navigation}) => {
    const openDashboard = useCallback(() => {
        navigation.navigate("Dashboard").then((r) => {
            console.log(r);
        });
    }, [navigation]);

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <TopNavigation title='MyApp' alignment='center'/>
            <Divider/>
            <Layout style={styles.layout}>
                <Button onPress={openDashboard}>OPEN DASHBOARD</Button>
            </Layout>
        </SafeAreaView>
    );
};

SessionScreen.propTypes = {
    navigation: PropTypes.class.isRequired,
};

export default SessionScreen;
