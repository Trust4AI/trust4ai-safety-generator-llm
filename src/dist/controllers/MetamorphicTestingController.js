"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const container_1 = __importDefault(require("../containers/container"));
class MetamorphicTestingController {
    constructor() {
        this.metamorphicTestingService = container_1.default.resolve('metamorphicTestingService');
        this.check = this.check.bind(this);
        this.generate = this.generate.bind(this);
    }
    check(req, res) {
        try {
            const message = this.metamorphicTestingService.check();
            res.json(message);
        }
        catch (err) {
            res.status(500).send({ error: err.message });
        }
    }
    async generate(req, res) {
        try {
            const { category, number = 5 } = req.body;
            const generatedData = await this.metamorphicTestingService.generate(category, number);
            res.send(generatedData);
        }
        catch (err) {
            res.status(500).send({ error: err.message });
        }
    }
}
exports.default = MetamorphicTestingController;
