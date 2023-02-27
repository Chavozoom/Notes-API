import {
  findAllService,
  createService,
  findByIdAndRemoveService,
  deleteManyService,
  findByIdService,
} from "../services/note.service.js";
import mongoose from "mongoose";

// Create and Save a new Note
export const create = async (req, res) => {
  try {
    const { title, text } = req.body;
    if (!text) {
      return res.status(400).send({
        message: "Missing text",
      });
    }

    await createService({
      title,
      text,
    });

    res.status(201).send({ message: "Note created successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Retrieve all Notes from the database.
export const findAll = async (req, res) => {
  try {
    const notes = await findAllService();

    if (notes.length === 0) {
      return res.status(400).send({ message: "No registred notes" });
    }

    res.send({ notes });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Delete a Note with the specified id in the request
export const deleteNote = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ message: "Invalid Id" });
    }
    const note = await findByIdService(id);

    if (!note) {
      return res.status(400).send({ message: "Note not found" });
    }
    await findByIdAndRemoveService(id);

    return res.status(200).send({ message: "Success" });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

// Delete all Notes from the database.
export const deleteAll = async (req, res) => {
  try {
    const notes = await findAllService();
    if (notes.length === 0) {
      res.status(404).send({ message: "Empty" });
    }

    await deleteManyService({});
    return res.status(200).send({ message: "Success" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
