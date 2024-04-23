"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Divider = exports.DividerPropsDefaults = exports.DividerPropsSchema = void 0;
const react_1 = __importDefault(require("react"));
const zod_1 = require("zod");
const COLOR_SCHEMA = zod_1.z
    .string()
    .regex(/^#[0-9a-fA-F]{6}$/)
    .nullable()
    .optional();
const PADDING_SCHEMA = zod_1.z
    .object({
    top: zod_1.z.number(),
    bottom: zod_1.z.number(),
    right: zod_1.z.number(),
    left: zod_1.z.number(),
})
    .optional()
    .nullable();
const getPadding = (padding) => padding ? `${padding.top}px ${padding.right}px ${padding.bottom}px ${padding.left}px` : undefined;
exports.DividerPropsSchema = zod_1.z.object({
    style: zod_1.z
        .object({
        backgroundColor: COLOR_SCHEMA,
        padding: PADDING_SCHEMA,
    })
        .optional()
        .nullable(),
    props: zod_1.z
        .object({
        lineColor: COLOR_SCHEMA,
        lineHeight: zod_1.z.number().optional().nullable(),
    })
        .optional()
        .nullable(),
});
exports.DividerPropsDefaults = {
    lineHeight: 1,
    lineColor: '#333333',
};
function Divider({ style, props }) {
    var _a, _b, _c;
    const st = {
        padding: getPadding(style === null || style === void 0 ? void 0 : style.padding),
        backgroundColor: (_a = style === null || style === void 0 ? void 0 : style.backgroundColor) !== null && _a !== void 0 ? _a : undefined,
    };
    const borderTopWidth = (_b = props === null || props === void 0 ? void 0 : props.lineHeight) !== null && _b !== void 0 ? _b : exports.DividerPropsDefaults.lineHeight;
    const borderTopColor = (_c = props === null || props === void 0 ? void 0 : props.lineColor) !== null && _c !== void 0 ? _c : exports.DividerPropsDefaults.lineColor;
    return (react_1.default.createElement("div", { style: st },
        react_1.default.createElement("hr", { style: {
                width: '100%',
                border: 'none',
                borderTop: `${borderTopWidth}px solid ${borderTopColor}`,
                margin: 0,
            } })));
}
exports.Divider = Divider;
//# sourceMappingURL=index.js.map