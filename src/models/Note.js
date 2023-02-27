import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  text: {
    type: String,
    required: true,
  },
});

const Note = mongoose.model("Note", NoteSchema);

export default Note;