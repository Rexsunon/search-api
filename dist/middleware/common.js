"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cors_1 = __importDefault(require("cors"));
const compression_1 = __importDefault(require("compression"));
exports.corsHandler = (router) => router.use(cors_1.default({ credentials: true, origin: true }));
exports.bodyRequestParserHandler = (router) => router.use(express_1.json());
exports.compressionHandler = (router) => router.use(compression_1.default());
//# sourceMappingURL=common.js.map