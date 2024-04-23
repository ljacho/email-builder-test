"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const _1 = require(".");
describe('Heading', () => {
    it('renders with default values', () => {
        expect((0, react_2.render)(react_1.default.createElement(_1.Heading, null)).asFragment()).toMatchSnapshot();
    });
    it('renders with style', () => {
        const style = {
            backgroundColor: '#444333',
            color: '#101010',
            fontFamily: 'HEAVY_SANS',
            fontWeight: 'normal',
            padding: {
                top: 15,
                bottom: 10,
                left: 24,
                right: 8,
            },
            textAlign: 'center',
        };
        const props = {
            text: 'Hello world!',
            level: 'h1',
        };
        expect((0, react_2.render)(react_1.default.createElement(_1.Heading, { style: style, props: props })).asFragment()).toMatchSnapshot();
    });
});
//# sourceMappingURL=index.spec.js.map