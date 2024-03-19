"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const MetamorphicTestingRoutes_1 = __importDefault(require("./routes/MetamorphicTestingRoutes"));
const swagger_1 = require("./config/swagger");
require("./config/loadEnv");
const app = (0, express_1.default)();
const API_VERSION = '/api/v1';
const swaggerUI = swagger_ui_express_1.default;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(API_VERSION + '/metamorphic-tests/docs', swaggerUI.serve, swaggerUI.setup(swagger_1.swaggerDocs, { explorer: true }));
app.use(API_VERSION + '/metamorphic-tests', MetamorphicTestingRoutes_1.default);
module.exports = app;
