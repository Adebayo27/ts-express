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
const Note_1 = require("../models/Note");
const NoteRepo_1 = require("../repository/NoteRepo");
class NoteController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newNote = new Note_1.Note();
                newNote.name = req.body.name;
                newNote.description = req.body.description;
                newNote.user_id = req.body.user_id;
                yield new NoteRepo_1.NoteRepo().create(newNote);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully created note!",
                });
            }
            catch (error) {
                res.status(500).json({
                    status: false,
                    message: 'An error occurred'
                });
            }
        });
    }
    getNote(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const new_note = yield new NoteRepo_1.NoteRepo().getById(Number(id));
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched note by id!",
                    data: new_note,
                });
            }
            catch (error) {
                res.status(500).json({
                    status: false,
                    message: 'An error occurred'
                });
            }
        });
    }
    getAllNote(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const all_note = yield new NoteRepo_1.NoteRepo().getAll();
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched notes",
                    data: all_note,
                });
            }
            catch (error) {
                res.status(500).json({
                    status: false,
                    message: 'An error occurred'
                });
            }
        });
    }
}
exports.default = new NoteController();
