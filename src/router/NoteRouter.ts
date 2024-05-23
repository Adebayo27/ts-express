import NoteController from "../controllers/NoteController";
import validate from "../helper/validate";
import { createNoteSchema } from "../schema/NoteSchema";
import BaseRoutes from "./base/BaseRouter";
class NoteRoutes extends BaseRoutes{
    public routes(): void {
        this.router.post("/create", validate(createNoteSchema), NoteController.create)
        this.router.get("", NoteController.getAllNote)
        // this.router.get("/note/:id", NoteController.create)
    }
    
}

export default new NoteRoutes().router