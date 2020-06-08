"use strict";

import React, {useCallback} from "react";
import PropTypes from "prop-types";
import {SafeAreaView} from "react-native";
import {
    Divider,
    Icon,
    Layout,
    Text,
    StyleService,
    TopNavigation,
    TopNavigationAction,
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

const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' />
);

export const DashboardScreen = ({navigation}) => {
    const navigateBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    const backAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
    );

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <TopNavigation title='MyApp' alignment='center' leftControl={backAction()}/>
            <Divider/>
            <Layout style={styles.layout}>
                <Text category='h1'>DETAILS</Text>
            </Layout>
        </SafeAreaView>
    );
};

DashboardScreen.propTypes = {
    navigation: PropTypes.class.isRequired,
};

export default DashboardScreen;
