"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const container_1 = __importDefault(require("../containers/container"));
const files_1 = require("../utils/files");
class MetamorphicTestingService {
    constructor() {
        this.generatorService = container_1.default.resolve('generatorService');
    }
    check() {
        return { message: 'Metamorphic Testing generator is working properly!' };
    }
    async generate(category, number) {
        const response = await this.generatorService.generateTestCases(category, number);
        (0, files_1.writeResponseToFile)(response);
        return response;
    }
}
exports.default = MetamorphicTestingService;
