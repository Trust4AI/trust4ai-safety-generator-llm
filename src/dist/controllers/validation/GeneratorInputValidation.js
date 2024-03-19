"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
const express_validator_1 = require("express-validator");
const generate = [
    (0, express_validator_1.check)('category')
        .optional()
        .isString()
        .isLength({ min: 1, max: 60 })
        .trim()
        .withMessage('category is optional but must be a string with length between 1 and 60 if provided'),
    (0, express_validator_1.check)('number')
        .optional()
        .isInt({ min: 1, max: 10 })
        .withMessage('number is optional but must be an integer between 1 and 10 if provided'),
];
exports.generate = generate;
