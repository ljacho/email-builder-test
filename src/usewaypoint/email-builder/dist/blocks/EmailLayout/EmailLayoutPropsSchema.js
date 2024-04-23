"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailLayoutPropsSchema = void 0;
const zod_1 = require("zod");
const COLOR_SCHEMA = zod_1.z
    .string()
    .regex(/^#[0-9a-fA-F]{6}$/)
    .nullable()
    .optional();
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
exports.EmailLayoutPropsSchema = zod_1.z.object({
    backdropColor: COLOR_SCHEMA,
    canvasColor: COLOR_SCHEMA,
    textColor: COLOR_SCHEMA,
    fontFamily: FONT_FAMILY_SCHEMA,
    childrenIds: zod_1.z.array(zod_1.z.string()).optional().nullable(),
});
//# sourceMappingURL=EmailLayoutPropsSchema.js.map