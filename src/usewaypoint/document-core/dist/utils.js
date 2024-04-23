"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockNotFoundError = void 0;
class BlockNotFoundError extends Error {
    constructor(blockId) {
        super('Could not find a block with the given blockId');
        this.blockId = blockId;
    }
}
exports.BlockNotFoundError = BlockNotFoundError;
//# sourceMappingURL=utils.js.map