"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reader = exports.ReaderBlock = exports.ReaderDocumentSchema = exports.ReaderBlockSchema = exports.renderToStaticMarkup = void 0;
var renderToStaticMarkup_1 = require("./renderers/renderToStaticMarkup");
Object.defineProperty(exports, "renderToStaticMarkup", { enumerable: true, get: function () { return __importDefault(renderToStaticMarkup_1).default; } });
var core_1 = require("./Reader/core");
Object.defineProperty(exports, "ReaderBlockSchema", { enumerable: true, get: function () { return core_1.ReaderBlockSchema; } });
//
Object.defineProperty(exports, "ReaderDocumentSchema", { enumerable: true, get: function () { return core_1.ReaderDocumentSchema; } });
//
Object.defineProperty(exports, "ReaderBlock", { enumerable: true, get: function () { return core_1.ReaderBlock; } });
Object.defineProperty(exports, "Reader", { enumerable: true, get: function () { return __importDefault(core_1).default; } });
//# sourceMappingURL=index.js.map