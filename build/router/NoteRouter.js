"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NoteController_1 = __importDefault(require("../controllers/NoteController"));
const validate_1 = __importDefault(require("../helper/validate"));
const NoteSchema_1 = require("../schema/NoteSchema");
const BaseRouter_1 = __importDefault(require("./base/BaseRouter"));
class NoteRoutes extends BaseRouter_1.default {
    routes() {
        this.router.post("/create", (0, validate_1.default)(NoteSchema_1.createNoteSchema), NoteController_1.default.create);
        this.router.get("", NoteController_1.default.getAllNote);
        // this.router.get("/note/:id", NoteController.create)
    }
}
exports.default = new NoteRoutes().router;
