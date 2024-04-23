"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
/**
 * @param blocks Main DocumentBlocksDictionary
 * @returns React component that can render a BlockConfiguration that is compatible with blocks
 */
function buildBlockComponent(blocks) {
    return function BlockComponent({ type, data }) {
        const Component = blocks[type].Component;
        return react_1.default.createElement(Component, Object.assign({}, data));
    };
}
exports.default = buildBlockComponent;
//# sourceMappingURL=buildBlockComponent.js.map