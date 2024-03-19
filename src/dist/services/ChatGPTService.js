"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mtGenerationPrompt_1 = require("../utils/prompts/mtGenerationPrompt");
const AbstractLanguageModelService_1 = __importDefault(require("./AbstractLanguageModelService"));
const openai_1 = __importDefault(require("openai"));
const openai = new openai_1.default({
    apiKey: process.env.OPENAI_API_KEY,
});
class ChatGPTService extends AbstractLanguageModelService_1.default {
    async generateTestCases(category, number) {
        const completion = await openai.chat.completions.create({
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
            model: 'gpt-3.5-turbo-0125',
        });
        const content = completion.choices[0].message.content;
        try {
            return JSON.parse(content !== null && content !== void 0 ? content : '[]');
        }
        catch (err) {
            console.error(err);
            return JSON.parse('[]');
        }
    }
}
exports.default = ChatGPTService;
