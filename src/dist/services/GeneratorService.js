"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ollama_1 = require("ollama");
const mtGenerationPrompt_1 = require("../utils/prompts/mtGenerationPrompt");
const AbstractLanguageModelService_1 = __importDefault(require("./AbstractLanguageModelService"));
const models_1 = require("../config/models");
class GeneratorService extends AbstractLanguageModelService_1.default {
    constructor() {
        var _a, _b;
        super();
        this.generatorModel = process.env.GENERATOR_MODEL || 'gemma';
        const modelData = (0, models_1.getGeneratorModelConfig)(this.generatorModel);
        this.model = (_a = modelData === null || modelData === void 0 ? void 0 : modelData.name) !== null && _a !== void 0 ? _a : 'gemma:2b';
        this.host = (_b = modelData === null || modelData === void 0 ? void 0 : modelData.host) !== null && _b !== void 0 ? _b : 'http://localhost:11434';
        this.ollama = new ollama_1.Ollama({ host: this.host });
    }
    async generateTestCases(category, number) {
        const response = await this.ollama.chat({
            model: this.model,
            messages: [
                {
                    role: 'system',
                    content: (0, mtGenerationPrompt_1.systemMTGenerationPrompt)({
                        category,
                    }),
                },
                {
                    role: 'user',
                    content: `Generate a total of ${number} ` +
                        `${number === 1 ? 'test case' : 'test cases'}` +
                        '.',
                },
            ],
        });
        const content = response.message.content;
        console.log('####################################### CONTENT #######################################');
        console.log(content);
        console.log('#######################################################################################');
        try {
            return JSON.parse(content !== null && content !== void 0 ? content : '[]');
        }
        catch (err) {
            console.error(err);
            return JSON.parse('[]');
        }
    }
}
exports.default = GeneratorService;
