"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const _1 = require(".");
describe('Divider', () => {
    it('renders with default values', () => {
        expect((0, react_2.render)(react_1.default.createElement(_1.Divider, null)).asFragment()).toMatchSnapshot();
    });
    it('renders with props', () => {
        expect((0, react_2.render)(react_1.default.createElement(_1.Divider, { style: {
                padding: { top: 1, left: 2, bottom: 3, right: 4 },
                backgroundColor: '#fff000',
            }, props: { lineColor: '#444222', lineHeight: 10 } })).asFragment()).toMatchSnapshot();
    });
});
//# sourceMappingURL=index.spec.js.map