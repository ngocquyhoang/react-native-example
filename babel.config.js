/* eslint-disable import/no-commonjs */

"use strict";

module.exports = (api) => {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
    };
};

/* eslint-enable import/no-commonjs */
