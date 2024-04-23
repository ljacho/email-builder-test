"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spacer = exports.SpacerPropsDefaults = exports.SpacerPropsSchema = void 0;
const react_1 = __importDefault(require("react"));
const zod_1 = require("zod");
exports.SpacerPropsSchema = zod_1.z.object({
    props: zod_1.z
        .object({
        height: zod_1.z.number().gte(0).optional().nullish(),
    })
        .optional()
        .nullable(),
});
exports.SpacerPropsDefaults = {
    height: 16,
};
function Spacer({ props }) {
    var _a;
    const style = {
        height: (_a = props === null || props === void 0 ? void 0 : props.height) !== null && _a !== void 0 ? _a : exports.SpacerPropsDefaults.height,
    };
    return react_1.default.createElement("div", { style: style });
}
exports.Spacer = Spacer;
//# sourceMappingURL=index.js.map