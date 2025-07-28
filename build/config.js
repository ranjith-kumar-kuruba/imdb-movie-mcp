"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfig = exports.initalizeConfig = void 0;
let config = null;
const initalizeConfig = () => {
    config = {
        baseUrl: "https://api.imdbapi.dev/"
    };
    return config;
};
exports.initalizeConfig = initalizeConfig;
const getConfig = () => {
    if (!config) {
        throw new Error('Configuration not initialized');
    }
    return config;
};
exports.getConfig = getConfig;
