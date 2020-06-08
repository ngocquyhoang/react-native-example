"use strict";

import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import * as x from "./screens/Session";
import {DashboardScreen} from "./screens/Dashboard";

const {Navigator, Screen} = createStackNavigator();

const HomeNavigator = () => (
    <Navigator headerMode='none'>
        <Screen name='Session' component={x}/>
        <Screen name='Dashboard' component={DashboardScreen}/>
    </Navigator>
);

const AppNavigator = () => (
    <NavigationContainer>
        <HomeNavigator/>
    </NavigationContainer>
);

export default AppNavigator;
