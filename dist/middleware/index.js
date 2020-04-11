"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("./common");
const apiDocs_1 = require("./apiDocs");
exports.default = [
    common_1.corsHandler,
    common_1.bodyRequestParserHandler,
    common_1.compressionHandler,
    apiDocs_1.handleApiDocs,
];
//# sourceMappingURL=index.js.map