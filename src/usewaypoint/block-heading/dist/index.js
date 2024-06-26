"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heading = exports.HeadingPropsDefaults = exports.HeadingPropsSchema = void 0;
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
const FONT_FAMILY_SCHEMA = zod_1.z
    .enum([
    'MODERN_SANS',
    'BOOK_SANS',
    'ORGANIC_SANS',
    'GEOMETRIC_SANS',
    'HEAVY_SANS',
    'ROUNDED_SANS',
    'MODERN_SERIF',
    'BOOK_SERIF',
    'MONOSPACE',
])
    .nullable()
    .optional();
function getFontFamily(fontFamily) {
    switch (fontFamily) {
        case 'MODERN_SANS':
            return '"Helvetica Neue", "Arial Nova", "Nimbus Sans", Arial, sans-serif';
        case 'BOOK_SANS':
            return 'Optima, Candara, "Noto Sans", source-sans-pro, sans-serif';
        case 'ORGANIC_SANS':
            return 'Seravek, "Gill Sans Nova", Ubuntu, Calibri, "DejaVu Sans", source-sans-pro, sans-serif';
        case 'GEOMETRIC_SANS':
            return 'Avenir, "Avenir Next LT Pro", Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif';
        case 'HEAVY_SANS':
            return 'Bahnschrift, "DIN Alternate", "Franklin Gothic Medium", "Nimbus Sans Narrow", sans-serif-condensed, sans-serif';
        case 'ROUNDED_SANS':
            return 'ui-rounded, "Hiragino Maru Gothic ProN", Quicksand, Comfortaa, Manjari, "Arial Rounded MT Bold", Calibri, source-sans-pro, sans-serif';
        case 'MODERN_SERIF':
            return 'Charter, "Bitstream Charter", "Sitka Text", Cambria, serif';
        case 'BOOK_SERIF':
            return '"Iowan Old Style", "Palatino Linotype", "URW Palladio L", P052, serif';
        case 'MONOSPACE':
            return '"Nimbus Mono PS", "Courier New", "Cutive Mono", monospace';
    }
    return undefined;
}
exports.HeadingPropsSchema = zod_1.z.object({
    props: zod_1.z
        .object({
        text: zod_1.z.string().optional().nullable(),
        level: zod_1.z.enum(['h1', 'h2', 'h3']).optional().nullable(),
    })
        .optional()
        .nullable(),
    style: zod_1.z
        .object({
        color: COLOR_SCHEMA,
        backgroundColor: COLOR_SCHEMA,
        fontFamily: FONT_FAMILY_SCHEMA,
        fontWeight: zod_1.z.enum(['bold', 'normal']).optional().nullable(),
        textAlign: zod_1.z.enum(['left', 'center', 'right']).optional().nullable(),
        padding: PADDING_SCHEMA,
    })
        .optional()
        .nullable(),
});
exports.HeadingPropsDefaults = {
    level: 'h2',
    text: '',
};
function Heading({ props, style }) {
    var _a, _b, _c, _d, _e, _f;
    const level = (_a = props === null || props === void 0 ? void 0 : props.level) !== null && _a !== void 0 ? _a : exports.HeadingPropsDefaults.level;
    const text = (_b = props === null || props === void 0 ? void 0 : props.text) !== null && _b !== void 0 ? _b : exports.HeadingPropsDefaults.text;
    const hStyle = {
        color: (_c = style === null || style === void 0 ? void 0 : style.color) !== null && _c !== void 0 ? _c : undefined,
        backgroundColor: (_d = style === null || style === void 0 ? void 0 : style.backgroundColor) !== null && _d !== void 0 ? _d : undefined,
        fontWeight: (_e = style === null || style === void 0 ? void 0 : style.fontWeight) !== null && _e !== void 0 ? _e : 'bold',
        textAlign: (_f = style === null || style === void 0 ? void 0 : style.textAlign) !== null && _f !== void 0 ? _f : undefined,
        margin: 0,
        fontFamily: getFontFamily(style === null || style === void 0 ? void 0 : style.fontFamily),
        fontSize: getFontSize(level),
        padding: getPadding(style === null || style === void 0 ? void 0 : style.padding),
    };
    switch (level) {
        case 'h1':
            return react_1.default.createElement("h1", { style: hStyle }, text);
        case 'h2':
            return react_1.default.createElement("h2", { style: hStyle }, text);
        case 'h3':
            return react_1.default.createElement("h3", { style: hStyle }, text);
    }
}
exports.Heading = Heading;
function getFontSize(level) {
    switch (level) {
        case 'h1':
            return 32;
        case 'h2':
            return 24;
        case 'h3':
            return 20;
    }
}
//# sourceMappingURL=index.js.map