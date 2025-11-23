const express = require("express");
const Note = require("../models/Note");

const router = express.Router();

// get all notes
router.get("/", async (req, res) => {
  try {
    const notes = await Note.find().sort({ updatedAt: -1 });
    res.json(notes);
  } catch (err) {
    console.log("Error getting notes", err);
    res.status(500).json({ message: "Server error" });
  }
});

// create note
router.post("/", async (req, res) => {
  try {
    const { title, content, isPinned } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const newNote = new Note({
      title,
      content,
      isPinned: isPinned || false
    });

    const saved = await newNote.save();
    res.status(201).json(saved);
  } catch (err) {
    console.log("Error creating note", err);
    res.status(500).json({ message: "Server error" });
  }
});

// update note
router.put("/:id", async (req, res) => {
  try {
    const { title, content, isPinned } = req.body;

    const updated = await Note.findByIdAndUpdate(
      req.params.id,
      {
        title,
        content,
        isPinned
      },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.json(updated);
  } catch (err) {
    console.log("Error updating note", err);
    res.status(500).json({ message: "Server error" });
  }
});

// delete note
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Note.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.json({ message: "Note deleted" });
  } catch (err) {
    console.log("Error deleting note", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
