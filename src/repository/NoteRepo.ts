import { Note } from "../models/Note";
import { User } from "../models/User";

interface INoteRepo {
  create(note: Note): Promise<void>;
  update(note: Note): Promise<void>;
  delete(noteId: Number): Promise<void>;
  getById(noteId: Number): Promise<Note>;
  getAll(): Promise<Note[]>;
  getAllPaginate(limit: Number, offset: Number): Promise<Note[]>;
}

export class NoteRepo implements INoteRepo {
  async getAllPaginate(limit: Number, offset: Number): Promise<Note[]> {
    throw new Error("Method not implemented.");
  }
  async create(note: Note): Promise<void> {
    try {
      await Note.create({
        name: note.name,
        description: note.description,
        user_id: note.user_id,
      });
    } catch (error) {
      throw new Error("An error occurred.");
    }
  }
  async update(note: Note): Promise<void> {
    try {
      const noteToUpdate = await Note.findOne({
        where: {
          id: note.id,
        },
      });
      if (!noteToUpdate) {
        throw new Error("Note not found");
      }

      noteToUpdate.name = note.name;
      noteToUpdate.description = note.description;
      noteToUpdate.user_id = note.user_id;

      await noteToUpdate.save();
    } catch (error) {
      throw new Error("An error occurred.");
    }
  }
  async delete(noteId: Number): Promise<void> {
    try {
        const new_note = await Note.findOne({
            where: {
                id: noteId
            }
        });
        if(!new_note){
            throw new Error("Note not found.");
        }

        await new_note.destroy()

    } catch (error) {
        throw new Error("Could not delete note.");
    }
    
  }
  async getById(noteId: Number): Promise<Note> {
    try {
        const note = await Note.findOne({
            where: {
                id: noteId
            }
        });

        if(!note){
            throw new Error("Note not found.");
        }
        return note;
    } catch (error) {
        throw new Error("Failed to get note.");
    }
    
  }
  async getAll(): Promise<Note[]> {
    try {
      return await Note.findAll({
        include: [
          {
            model: User,
            attributes: ["first_name", "last_name"],
          },
        ],
      });
    } catch (error) {
      throw new Error("Failed to get all.");
    }
  }
}
