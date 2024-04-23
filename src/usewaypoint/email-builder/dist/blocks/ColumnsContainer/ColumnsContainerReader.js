"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const block_columns_container_1 = require("@usewaypoint/block-columns-container");
const core_1 = require("../../Reader/core");
function ColumnsContainerReader({ style, props }) {
    const _a = props !== null && props !== void 0 ? props : {}, { columns } = _a, restProps = __rest(_a, ["columns"]);
    let cols = undefined;
    if (columns) {
        cols = columns.map((col) => col.childrenIds.map((childId) => react_1.default.createElement(core_1.ReaderBlock, { key: childId, id: childId })));
    }
    return react_1.default.createElement(block_columns_container_1.ColumnsContainer, { props: restProps, columns: cols, style: style });
}
exports.default = ColumnsContainerReader;
//# sourceMappingURL=ColumnsContainerReader.js.map