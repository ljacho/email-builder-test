"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const _1 = require(".");
describe('block-avatar', () => {
    describe('Avatar', () => {
        it('renders with default values', () => {
            expect((0, react_2.render)(react_1.default.createElement(_1.Avatar, null)).asFragment()).toMatchSnapshot();
        });
    });
});
//# sourceMappingURL=index.spec.js.map