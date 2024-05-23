"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNoteSchema = void 0;
const zod_1 = require("zod");
exports.createNoteSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, {
            message: 'Name must be greater than 1 character(s)'
        }),
        description: zod_1.z.string().min(5, {
            message: 'Description must be greater than 5 character(s)'
        })
    })
});
