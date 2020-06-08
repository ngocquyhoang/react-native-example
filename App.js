"use strict";

import React from "react";
// eslint-disable-next-line import/no-namespace
import * as eva from "@eva-design/eva";
import {
    ApplicationProvider,
    Layout,
    Text,
    StyleService,
} from "@ui-kitten/components";
import {default as theme} from "./theme.json";

const styles = StyleService.create({
    layout: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

const HomeScreen = () => (
    <Layout style={styles.layout}>
        <Text category='h1'>HOME</Text>
    </Layout>
);

const App = () => (
    <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
        <HomeScreen />
    </ApplicationProvider>
);

export default App;
