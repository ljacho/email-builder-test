"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Avatar = exports.AvatarPropsDefaults = exports.AvatarPropsSchema = void 0;
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
exports.AvatarPropsSchema = zod_1.z.object({
    style: zod_1.z
        .object({
        textAlign: zod_1.z.enum(['left', 'center', 'right']).optional().nullable(),
        padding: PADDING_SCHEMA,
    })
        .optional()
        .nullable(),
    props: zod_1.z
        .object({
        size: zod_1.z.number().gt(0).optional().nullable(),
        shape: zod_1.z.enum(['circle', 'square', 'rounded']).optional().nullable(),
        imageUrl: zod_1.z.string().optional().nullable(),
        alt: zod_1.z.string().optional().nullable(),
    })
        .optional()
        .nullable(),
});
function getBorderRadius(shape, size) {
    switch (shape) {
        case 'rounded':
            return size * 0.125;
        case 'circle':
            return size;
        case 'square':
        default:
            return undefined;
    }
}
exports.AvatarPropsDefaults = {
    size: 64,
    imageUrl: '',
    alt: '',
    shape: 'square',
};
function Avatar({ style, props }) {
    var _a, _b, _c, _d, _e;
    const size = (_a = props === null || props === void 0 ? void 0 : props.size) !== null && _a !== void 0 ? _a : exports.AvatarPropsDefaults.size;
    const imageUrl = (_b = props === null || props === void 0 ? void 0 : props.imageUrl) !== null && _b !== void 0 ? _b : exports.AvatarPropsDefaults.imageUrl;
    const alt = (_c = props === null || props === void 0 ? void 0 : props.alt) !== null && _c !== void 0 ? _c : exports.AvatarPropsDefaults.alt;
    const shape = (_d = props === null || props === void 0 ? void 0 : props.shape) !== null && _d !== void 0 ? _d : exports.AvatarPropsDefaults.shape;
    const sectionStyle = {
        textAlign: (_e = style === null || style === void 0 ? void 0 : style.textAlign) !== null && _e !== void 0 ? _e : undefined,
        padding: getPadding(style === null || style === void 0 ? void 0 : style.padding),
    };
    return (react_1.default.createElement("div", { style: sectionStyle },
        react_1.default.createElement("img", { alt: alt, src: imageUrl, height: size, width: size, style: {
                outline: 'none',
                border: 'none',
                textDecoration: 'none',
                objectFit: 'cover',
                height: size,
                width: size,
                maxWidth: '100%',
                display: 'inline-block',
                verticalAlign: 'middle',
                textAlign: 'center',
                borderRadius: getBorderRadius(shape, size),
            } })));
}
exports.Avatar = Avatar;
//# sourceMappingURL=index.js.map