"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const core_1 = require("../../Reader/core");
function getFontFamily(fontFamily) {
    const f = fontFamily !== null && fontFamily !== void 0 ? fontFamily : 'MODERN_SANS';
    switch (f) {
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
}
function EmailLayoutReader(props) {
    var _a, _b, _c, _d;
    const childrenIds = (_a = props.childrenIds) !== null && _a !== void 0 ? _a : [];
    return (react_1.default.createElement("div", { style: {
            backgroundColor: (_b = props.backdropColor) !== null && _b !== void 0 ? _b : '#F5F5F5',
            color: (_c = props.textColor) !== null && _c !== void 0 ? _c : '#262626',
            fontFamily: getFontFamily(props.fontFamily),
            fontSize: '16px',
            fontWeight: '400',
            letterSpacing: '0.15008px',
            lineHeight: '1.5',
            margin: '0',
            padding: '32px 0',
            minHeight: '100%',
            width: '100%',
        } },
        react_1.default.createElement("table", { align: "center", width: "100%", style: {
                margin: '0 auto',
                maxWidth: '600px',
                backgroundColor: (_d = props.canvasColor) !== null && _d !== void 0 ? _d : '#FFFFFF',
            }, role: "presentation", cellSpacing: "0", cellPadding: "0", border: 0 },
            react_1.default.createElement("tbody", null,
                react_1.default.createElement("tr", { style: { width: '100%' } },
                    react_1.default.createElement("td", null, childrenIds.map((childId) => (react_1.default.createElement(core_1.ReaderBlock, { key: childId, id: childId })))))))));
}
exports.default = EmailLayoutReader;
//# sourceMappingURL=EmailLayoutReader.js.map