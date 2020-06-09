"use strict";

import React from "react";
// eslint-disable-next-line import/no-namespace
import * as eva from "@eva-design/eva";
import {ApplicationProvider, IconRegistry} from "@ui-kitten/components";
import {EvaIconsPack} from "@ui-kitten/eva-icons";

import AppNavigator from "./src/navigation";
import ThemeContext from "./src/theme-context";

const App = () => {
    const [theme, setTheme] = React.useState("light");
    const toggleTheme = () => {
        const nextTheme = theme === "light" ? "dark" : "light";
        setTheme(nextTheme);
    };

    return (
        <>
            <IconRegistry icons={EvaIconsPack}/>
            <ThemeContext.Provider value={{theme, toggleTheme}}>
                <ApplicationProvider {...eva} theme={eva[theme]}>
                    <AppNavigator/>
                </ApplicationProvider>
            </ThemeContext.Provider>
        </>
    );
};

export default App;
