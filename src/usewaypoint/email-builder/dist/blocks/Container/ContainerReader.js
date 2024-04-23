"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const block_container_1 = require("@usewaypoint/block-container");
const core_1 = require("../../Reader/core");
function ContainerReader({ style, props }) {
    var _a;
    const childrenIds = (_a = props === null || props === void 0 ? void 0 : props.childrenIds) !== null && _a !== void 0 ? _a : [];
    return (react_1.default.createElement(block_container_1.Container, { style: style }, childrenIds.map((childId) => (react_1.default.createElement(core_1.ReaderBlock, { key: childId, id: childId })))));
}
exports.default = ContainerReader;
//# sourceMappingURL=ContainerReader.js.map