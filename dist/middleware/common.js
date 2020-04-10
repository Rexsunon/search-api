"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cors_1 = __importDefault(require("cors"));
const compression_1 = __importDefault(require("compression"));
/**
 * Enable cors
 *
 * @param router express router
 */
exports.corsHandler = (router) => router.use(cors_1.default({ credentials: true, origin: true }));
/**
 * Body parser
 *
 * @param router express router
 */
exports.bodyRequestParserHandler = (router) => router.use(express_1.json());
/**
 * Handleing compression
 *
 * @param router express router
 */
exports.compressionHandler = (router) => router.use(compression_1.default());
//# sourceMappingURL=common.js.map