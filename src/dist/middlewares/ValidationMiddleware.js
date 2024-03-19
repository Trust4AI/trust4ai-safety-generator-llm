"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleValidation = void 0;
const express_validator_1 = require("express-validator");
const handleValidation = (req, res, next) => {
    const err = (0, express_validator_1.validationResult)(req).array();
    if (err.length > 0) {
        res.status(422).send(err);
    }
    else {
        next();
    }
};
exports.handleValidation = handleValidation;
