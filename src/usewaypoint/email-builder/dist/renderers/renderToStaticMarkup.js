"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const server_1 = require("react-dom/server");
const core_1 = __importDefault(require("../Reader/core"));
function renderToStaticMarkup(document, { rootBlockId }) {
    return ('<!DOCTYPE html>' +
        (0, server_1.renderToStaticMarkup)(react_1.default.createElement("html", null,
            react_1.default.createElement("body", null,
                react_1.default.createElement(core_1.default, { document: document, rootBlockId: rootBlockId })))));
}
exports.default = renderToStaticMarkup;
//# sourceMappingURL=renderToStaticMarkup.js.map