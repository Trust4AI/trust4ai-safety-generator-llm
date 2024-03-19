"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeResponseToFile = void 0;
const fs_1 = __importDefault(require("fs"));
const writeResponseToFile = (response) => {
    const date = new Date().toISOString().replace(/:/g, '-');
    fs_1.default.writeFileSync('./output/' + date + '.json', JSON.stringify(response, null, 4));
};
exports.writeResponseToFile = writeResponseToFile;
