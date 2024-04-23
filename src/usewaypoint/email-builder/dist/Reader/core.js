"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReaderBlock = exports.ReaderDocumentSchema = exports.ReaderBlockSchema = void 0;
const react_1 = __importStar(require("react"));
const zod_1 = require("zod");
const block_avatar_1 = require("@usewaypoint/block-avatar");
const block_button_1 = require("@usewaypoint/block-button");
const block_divider_1 = require("@usewaypoint/block-divider");
const block_heading_1 = require("@usewaypoint/block-heading");
const block_html_1 = require("@usewaypoint/block-html");
const block_image_1 = require("@usewaypoint/block-image");
const block_spacer_1 = require("@usewaypoint/block-spacer");
const block_text_1 = require("@usewaypoint/block-text");
const document_core_1 = require("@usewaypoint/document-core");
const ColumnsContainerPropsSchema_1 = __importDefault(require("../blocks/ColumnsContainer/ColumnsContainerPropsSchema"));
const ColumnsContainerReader_1 = __importDefault(require("../blocks/ColumnsContainer/ColumnsContainerReader"));
const ContainerPropsSchema_1 = require("../blocks/Container/ContainerPropsSchema");
const ContainerReader_1 = __importDefault(require("../blocks/Container/ContainerReader"));
const EmailLayoutPropsSchema_1 = require("../blocks/EmailLayout/EmailLayoutPropsSchema");
const EmailLayoutReader_1 = __importDefault(require("../blocks/EmailLayout/EmailLayoutReader"));
const ReaderContext = (0, react_1.createContext)({});
function useReaderDocument() {
    return (0, react_1.useContext)(ReaderContext);
}
const READER_DICTIONARY = (0, document_core_1.buildBlockConfigurationDictionary)({
    ColumnsContainer: {
        schema: ColumnsContainerPropsSchema_1.default,
        Component: ColumnsContainerReader_1.default,
    },
    Container: {
        schema: ContainerPropsSchema_1.ContainerPropsSchema,
        Component: ContainerReader_1.default,
    },
    EmailLayout: {
        schema: EmailLayoutPropsSchema_1.EmailLayoutPropsSchema,
        Component: EmailLayoutReader_1.default,
    },
    //
    Avatar: {
        schema: block_avatar_1.AvatarPropsSchema,
        Component: block_avatar_1.Avatar,
    },
    Button: {
        schema: block_button_1.ButtonPropsSchema,
        Component: block_button_1.Button,
    },
    Divider: {
        schema: block_divider_1.DividerPropsSchema,
        Component: block_divider_1.Divider,
    },
    Heading: {
        schema: block_heading_1.HeadingPropsSchema,
        Component: block_heading_1.Heading,
    },
    Html: {
        schema: block_html_1.HtmlPropsSchema,
        Component: block_html_1.Html,
    },
    Image: {
        schema: block_image_1.ImagePropsSchema,
        Component: block_image_1.Image,
    },
    Spacer: {
        schema: block_spacer_1.SpacerPropsSchema,
        Component: block_spacer_1.Spacer,
    },
    Text: {
        schema: block_text_1.TextPropsSchema,
        Component: block_text_1.Text,
    },
});
exports.ReaderBlockSchema = (0, document_core_1.buildBlockConfigurationSchema)(READER_DICTIONARY);
exports.ReaderDocumentSchema = zod_1.z.record(zod_1.z.string(), exports.ReaderBlockSchema);
const BaseReaderBlock = (0, document_core_1.buildBlockComponent)(READER_DICTIONARY);
function ReaderBlock({ id }) {
    const document = useReaderDocument();
    return react_1.default.createElement(BaseReaderBlock, Object.assign({}, document[id]));
}
exports.ReaderBlock = ReaderBlock;
function Reader({ document, rootBlockId }) {
    return (react_1.default.createElement(ReaderContext.Provider, { value: document },
        react_1.default.createElement(ReaderBlock, { id: rootBlockId })));
}
exports.default = Reader;
//# sourceMappingURL=core.js.map