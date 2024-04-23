"use strict";
/**
 * @jest-environment node
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const renderToStaticMarkup_1 = __importDefault(require("./renderToStaticMarkup"));
describe('renderToStaticMarkup', () => {
    it('renders into a string', () => {
        const result = (0, renderToStaticMarkup_1.default)({
            root: {
                type: 'Container',
                data: {
                    props: {
                        childrenIds: [],
                    },
                },
            },
        }, { rootBlockId: 'root' });
        expect(result).toEqual('<!DOCTYPE html><html><body><div></div></body></html>');
    });
});
//# sourceMappingURL=renderToStaticMarkup.spec.js.map