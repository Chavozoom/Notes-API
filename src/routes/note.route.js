import {Router} from "express";
import {create, findAll, deleteNote, deleteAll} from "../controllers/note.controller.js"
const router = Router();

// Create a new Note
router.post("/", create);

// Retrieve all notes
router.get("/", findAll);

// Delete a Note with id
router.delete("/delete/:id", deleteNote);

// Delete all notes
router.delete("/delete", deleteAll);

export default router;
