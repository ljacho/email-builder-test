"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerPropsSchema = void 0;
const zod_1 = require("zod");
const block_container_1 = require("@usewaypoint/block-container");
exports.ContainerPropsSchema = zod_1.z.object({
    style: block_container_1.ContainerPropsSchema.shape.style,
    props: zod_1.z
        .object({
        childrenIds: zod_1.z.array(zod_1.z.string()).optional().nullable(),
    })
        .optional()
        .nullable(),
});
//# sourceMappingURL=ContainerPropsSchema.js.map