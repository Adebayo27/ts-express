import { Request, Response } from "express";
import { Note } from "../models/Note";
import { NoteRepo } from "../repository/NoteRepo";
class NoteController {
    
    async create(req: Request, res: Response){
        try {
            const newNote = new Note()
            newNote.name = req.body.name 
            newNote.description = req.body.description 
            newNote.user_id = req.body.user_id 

            await new NoteRepo().create(newNote);
            res.status(200).json({
                status: "Ok!",
                message: "Successfully created note!",
              });
        } catch (error) {
            res.status(500).json({
                status: false,
                message: 'An error occurred'
            });
        }
    }

    async getNote(req: Request, res: Response){
        try {
            const id = req.params.id
            const new_note = await new NoteRepo().getById(Number(id));
            res.status(200).json({
                status: "Ok!",
                message: "Successfully fetched note by id!",
                data: new_note,
            });
        } catch (error) {
            res.status(500).json({
                status: false,
                message: 'An error occurred'
            });
        }
    }

    async getAllNote(req: Request, res: Response){
        try {
            // console.log(req.body)
            const all_note = await new NoteRepo().getAll();
            res.status(200).json({
                status: "Ok!",
                message: "Successfully fetched notes",
                data: all_note,
            });
        } catch (error) {
            res.status(500).json({
                status: false,
                message: 'An error occurred',
                error: error
            });
        }
    }
}

export default new NoteController()