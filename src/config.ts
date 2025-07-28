interface Config {
    baseUrl: string
}

let config: Config | null = null

const initalizeConfig = (): Config => {
    config = {
        baseUrl: "https://api.imdbapi.dev/"
    }

    return config;
}

const getConfig = (): Config => {
    if (!config) {
        throw new Error('Configuration not initialized')
    }

    return config;
};

export { Config, initalizeConfig, getConfig }