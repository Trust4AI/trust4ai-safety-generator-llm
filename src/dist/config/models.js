"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGeneratorModelConfig = void 0;
const models = {
    gemma: {
        name: 'gemma:2b',
        host: process.env.GEMMA_HOST || process.env.NODE_ENV === 'docker'
            ? 'http://gemma:11434'
            : 'http://localhost:11434',
    },
};
const getGeneratorModelConfig = (key) => {
    if (models[key]) {
        return {
            name: models[key].name,
            host: models[key].host,
        };
    }
    else {
        return null;
    }
};
exports.getGeneratorModelConfig = getGeneratorModelConfig;
