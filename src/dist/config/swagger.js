"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerDocs = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const yaml_1 = __importDefault(require("yaml"));
const fs_1 = __importDefault(require("fs"));
const port = process.env.PORT || 8000;
const swaggerJsDoc = swagger_jsdoc_1.default;
const swaggerOptions = {
    definition: {
        openapi: '3.1.0',
        info: {
            version: '1.0.0',
            title: 'Safety Generator LLM - API',
            description: 'Prompt/search term generator for safety testing based on the use of LLMs.',
            contact: {
                name: 'Trust4AI Team',
                email: '',
                url: 'https://trust4ai.github.io/trust4ai/',
            },
            license: {
                name: 'GNU General Public License v3.0',
                url: 'https://github.com/Trust4AI/trust4ai-safety-generator-llm/blob/main/LICENSE',
            },
        },
        servers: [
            {
                url: 'http://localhost:' + port + '/api/v1/metamorphic-tests/',
            },
        ],
    },
    apis: ['./api/routes/MetamorphicTestingRoutes.ts'],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
exports.swaggerDocs = swaggerDocs;
const yamlString = yaml_1.default.stringify(swaggerDocs, {});
fs_1.default.writeFileSync('../docs/openapi/spec.yaml', yamlString);
