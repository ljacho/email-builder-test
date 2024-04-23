"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
/**
 *
 * @param blocks Main DocumentBlocksDictionary
 * @returns zod schema that can parse arbitary objects into a single BlockConfiguration
 */
function buildBlockConfigurationSchema(blocks) {
    const blockObjects = Object.keys(blocks).map((type) => zod_1.z.object({
        type: zod_1.z.literal(type),
        data: blocks[type].schema,
    }));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return zod_1.z.discriminatedUnion('type', blockObjects).transform((v) => v);
}
exports.default = buildBlockConfigurationSchema;
//# sourceMappingURL=buildBlockConfigurationSchema.js.map