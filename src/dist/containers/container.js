"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const awilix_1 = require("awilix");
const MetamorphicTestingRepository_1 = __importDefault(require("../repositories/MetamorphicTestingRepository"));
const ChatGPTService_1 = __importDefault(require("../services/ChatGPTService"));
const MetamorphicTestingService_1 = __importDefault(require("../services/MetamorphicTestingService"));
const GeneratorService_1 = __importDefault(require("../services/GeneratorService"));
function initContainer(generatorModel) {
    const container = (0, awilix_1.createContainer)();
    const selectedGeneratorService = generatorModel.toLowerCase() === 'chatgpt'
        ? ChatGPTService_1.default
        : GeneratorService_1.default;
    container.register({
        metamorphicTestingRepository: (0, awilix_1.asValue)(MetamorphicTestingRepository_1.default),
        chatGPTService: (0, awilix_1.asClass)(ChatGPTService_1.default).singleton(),
        generatorService: (0, awilix_1.asClass)(selectedGeneratorService).singleton(),
        metamorphicTestingService: (0, awilix_1.asClass)(MetamorphicTestingService_1.default).singleton(),
    });
    return container;
}
let container = null;
if (!container) {
    container = initContainer(process.env.GENERATOR_MODEL || 'ChatGPT');
}
exports.default = container;
