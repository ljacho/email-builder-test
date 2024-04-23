"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = exports.ImagePropsSchema = void 0;
const react_1 = __importDefault(require("react"));
const zod_1 = require("zod");
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
exports.ImagePropsSchema = zod_1.z.object({
    style: zod_1.z
        .object({
        padding: PADDING_SCHEMA,
        backgroundColor: zod_1.z
            .string()
            .regex(/^#[0-9a-fA-F]{6}$/)
            .optional()
            .nullable(),
        textAlign: zod_1.z.enum(['center', 'left', 'right']).optional().nullable(),
    })
        .optional()
        .nullable(),
    props: zod_1.z
        .object({
        width: zod_1.z.number().optional().nullable(),
        height: zod_1.z.number().optional().nullable(),
        url: zod_1.z.string().optional().nullable(),
        alt: zod_1.z.string().optional().nullable(),
        linkHref: zod_1.z.string().optional().nullable(),
        contentAlignment: zod_1.z.enum(['top', 'middle', 'bottom']).optional().nullable(),
    })
        .optional()
        .nullable(),
});
function Image({ style, props }) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const sectionStyle = {
        padding: getPadding(style === null || style === void 0 ? void 0 : style.padding),
        backgroundColor: (_a = style === null || style === void 0 ? void 0 : style.backgroundColor) !== null && _a !== void 0 ? _a : undefined,
        textAlign: (_b = style === null || style === void 0 ? void 0 : style.textAlign) !== null && _b !== void 0 ? _b : undefined,
    };
    const linkHref = (_c = props === null || props === void 0 ? void 0 : props.linkHref) !== null && _c !== void 0 ? _c : null;
    const width = (_d = props === null || props === void 0 ? void 0 : props.width) !== null && _d !== void 0 ? _d : undefined;
    const height = (_e = props === null || props === void 0 ? void 0 : props.height) !== null && _e !== void 0 ? _e : undefined;
    const imageElement = (react_1.default.createElement("img", { alt: (_f = props === null || props === void 0 ? void 0 : props.alt) !== null && _f !== void 0 ? _f : '', src: (_g = props === null || props === void 0 ? void 0 : props.url) !== null && _g !== void 0 ? _g : '', width: width, height: height, style: {
            width,
            height,
            outline: 'none',
            border: 'none',
            textDecoration: 'none',
            verticalAlign: (_h = props === null || props === void 0 ? void 0 : props.contentAlignment) !== null && _h !== void 0 ? _h : 'middle',
            display: 'inline-block',
            maxWidth: '100%',
        } }));
    if (!linkHref) {
        return react_1.default.createElement("div", { style: sectionStyle }, imageElement);
    }
    return (react_1.default.createElement("div", { style: sectionStyle },
        react_1.default.createElement("a", { href: linkHref, style: { textDecoration: 'none' }, target: "_blank" }, imageElement)));
}
exports.Image = Image;
//# sourceMappingURL=index.js.map