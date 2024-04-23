"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = exports.ContainerPropsSchema = void 0;
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
exports.ContainerPropsSchema = zod_1.z.object({
    style: zod_1.z
        .object({
        backgroundColor: COLOR_SCHEMA,
        borderColor: COLOR_SCHEMA,
        borderRadius: zod_1.z.number().optional().nullable(),
        padding: PADDING_SCHEMA,
    })
        .optional()
        .nullable(),
});
function getBorder(style) {
    if (!style || !style.borderColor) {
        return undefined;
    }
    return `1px solid ${style.borderColor}`;
}
function Container({ style, children }) {
    var _a, _b;
    const wStyle = {
        backgroundColor: (_a = style === null || style === void 0 ? void 0 : style.backgroundColor) !== null && _a !== void 0 ? _a : undefined,
        border: getBorder(style),
        borderRadius: (_b = style === null || style === void 0 ? void 0 : style.borderRadius) !== null && _b !== void 0 ? _b : undefined,
        padding: getPadding(style === null || style === void 0 ? void 0 : style.padding),
    };
    if (!children) {
        return react_1.default.createElement("div", { style: wStyle });
    }
    return react_1.default.createElement("div", { style: wStyle }, children);
}
exports.Container = Container;
//# sourceMappingURL=index.js.map