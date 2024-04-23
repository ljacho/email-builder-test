"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnsContainer = exports.ColumnsContainerPropsSchema = void 0;
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
const FIXED_WIDTHS_SCHEMA = zod_1.z
    .tuple([zod_1.z.number().nullish(), zod_1.z.number().nullish(), zod_1.z.number().nullish()])
    .optional()
    .nullable();
const getPadding = (padding) => padding ? `${padding.top}px ${padding.right}px ${padding.bottom}px ${padding.left}px` : undefined;
exports.ColumnsContainerPropsSchema = zod_1.z.object({
    style: zod_1.z
        .object({
        backgroundColor: COLOR_SCHEMA,
        padding: PADDING_SCHEMA,
    })
        .optional()
        .nullable(),
    props: zod_1.z
        .object({
        fixedWidths: FIXED_WIDTHS_SCHEMA,
        columnsCount: zod_1.z
            .union([zod_1.z.literal(2), zod_1.z.literal(3)])
            .optional()
            .nullable(),
        columnsGap: zod_1.z.number().optional().nullable(),
        contentAlignment: zod_1.z.enum(['top', 'middle', 'bottom']).optional().nullable(),
    })
        .optional()
        .nullable(),
});
const ColumnsContainerPropsDefaults = {
    columnsCount: 2,
    columnsGap: 0,
    contentAlignment: 'middle',
};
function ColumnsContainer({ style, columns, props }) {
    var _a, _b, _c, _d;
    const wStyle = {
        backgroundColor: (_a = style === null || style === void 0 ? void 0 : style.backgroundColor) !== null && _a !== void 0 ? _a : undefined,
        padding: getPadding(style === null || style === void 0 ? void 0 : style.padding),
    };
    const blockProps = {
        columnsCount: (_b = props === null || props === void 0 ? void 0 : props.columnsCount) !== null && _b !== void 0 ? _b : ColumnsContainerPropsDefaults.columnsCount,
        columnsGap: (_c = props === null || props === void 0 ? void 0 : props.columnsGap) !== null && _c !== void 0 ? _c : ColumnsContainerPropsDefaults.columnsGap,
        contentAlignment: (_d = props === null || props === void 0 ? void 0 : props.contentAlignment) !== null && _d !== void 0 ? _d : ColumnsContainerPropsDefaults.contentAlignment,
        fixedWidths: props === null || props === void 0 ? void 0 : props.fixedWidths,
    };
    return (react_1.default.createElement("div", { style: wStyle },
        react_1.default.createElement("table", { align: "center", width: "100%", cellPadding: "0", border: 0, style: { tableLayout: 'fixed', borderCollapse: 'collapse' } },
            react_1.default.createElement("tbody", { style: { width: '100%' } },
                react_1.default.createElement("tr", { style: { width: '100%' } },
                    react_1.default.createElement(TableCell, { index: 0, props: blockProps, columns: columns }),
                    react_1.default.createElement(TableCell, { index: 1, props: blockProps, columns: columns }),
                    react_1.default.createElement(TableCell, { index: 2, props: blockProps, columns: columns }))))));
}
exports.ColumnsContainer = ColumnsContainer;
function TableCell({ index, props, columns }) {
    var _a, _b, _c, _d, _e;
    const contentAlignment = (_a = props === null || props === void 0 ? void 0 : props.contentAlignment) !== null && _a !== void 0 ? _a : ColumnsContainerPropsDefaults.contentAlignment;
    const columnsCount = (_b = props === null || props === void 0 ? void 0 : props.columnsCount) !== null && _b !== void 0 ? _b : ColumnsContainerPropsDefaults.columnsCount;
    if (columnsCount === 2 && index === 2) {
        return null;
    }
    const style = {
        boxSizing: 'content-box',
        verticalAlign: contentAlignment,
        paddingLeft: getPaddingBefore(index, props),
        paddingRight: getPaddingAfter(index, props),
        width: (_d = (_c = props.fixedWidths) === null || _c === void 0 ? void 0 : _c[index]) !== null && _d !== void 0 ? _d : undefined,
    };
    const children = (_e = (columns && columns[index])) !== null && _e !== void 0 ? _e : null;
    return react_1.default.createElement("td", { style: style }, children);
}
function getPaddingBefore(index, { columnsGap, columnsCount }) {
    if (index === 0) {
        return 0;
    }
    if (columnsCount === 2) {
        return columnsGap / 2;
    }
    if (index === 1) {
        return columnsGap / 3;
    }
    return (2 * columnsGap) / 3;
}
function getPaddingAfter(index, { columnsGap, columnsCount }) {
    if (columnsCount === 2) {
        if (index === 0) {
            return columnsGap / 2;
        }
        return 0;
    }
    if (index === 0) {
        return (2 * columnsGap) / 3;
    }
    if (index === 1) {
        return columnsGap / 3;
    }
    return 0;
}
//# sourceMappingURL=index.js.map