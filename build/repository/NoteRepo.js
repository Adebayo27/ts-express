"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteRepo = void 0;
const Note_1 = require("../models/Note");
class NoteRepo {
    getAllPaginate(limit, offset) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Method not implemented.");
        });
    }
    create(note) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Note_1.Note.create({
                    name: note.name,
                    description: note.description,
                    user_id: note.user_id
                });
            }
            catch (error) {
                throw new Error("An error occurred.");
            }
        });
    }
    update(note) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const noteToUpdate = yield Note_1.Note.findOne({
                    where: {
                        id: note.id
                    }
                });
                if (!noteToUpdate) {
                    throw new Error("Note not found");
                }
                noteToUpdate.name = note.name;
                noteToUpdate.description = note.description;
                noteToUpdate.user_id = note.user_id;
                yield noteToUpdate.save();
            }
            catch (error) {
                throw new Error("An error occurred.");
            }
        });
    }
    delete(noteId) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Method not implemented.");
        });
    }
    getById(noteId) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Method not implemented.");
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Note_1.Note.findAll();
            }
            catch (error) {
                throw new Error("Method not implemented.");
            }
        });
    }
}
exports.NoteRepo = NoteRepo;
