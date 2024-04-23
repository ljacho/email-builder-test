"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const block_columns_container_1 = require("@usewaypoint/block-columns-container");
const BasePropsShape = block_columns_container_1.ColumnsContainerPropsSchema.shape.props.unwrap().unwrap().shape;
const ColumnsContainerPropsSchema = zod_1.z.object({
    style: block_columns_container_1.ColumnsContainerPropsSchema.shape.style,
    props: zod_1.z
        .object(Object.assign(Object.assign({}, BasePropsShape), { columns: zod_1.z.tuple([
            zod_1.z.object({ childrenIds: zod_1.z.array(zod_1.z.string()) }),
            zod_1.z.object({ childrenIds: zod_1.z.array(zod_1.z.string()) }),
            zod_1.z.object({ childrenIds: zod_1.z.array(zod_1.z.string()) }),
        ]) }))
        .optional()
        .nullable(),
});
exports.default = ColumnsContainerPropsSchema;
//# sourceMappingURL=ColumnsContainerPropsSchema.js.map