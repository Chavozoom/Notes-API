import Note from "../models/Note.js";

export const createService = (body) => Note.create(body);
export const findAllService = () => Note.find();
export const findByIdService = (id) => Note.findById(id);
export const findByIdAndRemoveService = (id) => Note.findByIdAndRemove(id);
export const deleteManyService = () => Note.deleteMany({});