const express = require("express");
const router = express.Router();
const Class = require("../models/Class");

// GET all classes (Class Index)
router.get("/", async (req, res) => {
  try {
    const classes = await Class.find();
    res.json(classes);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// GET a single class by id
router.get("/:id", async (req, res) => {
  try {
    const classItem = await Class.findById(req.params.id);
    if (!classItem) {
      return res.status(404).json({ error: "Class not found" });
    }
    res.json(classItem);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// POST a new class
router.post("/", async (req, res) => {
  try {
    const newClass = new Class(req.body);
    const savedClass = await newClass.save();
    res.status(201).json(savedClass);
  } catch (error) {
    res.status(400).json({ error: "Bad request" });
  }
});

// Update a class by id
router.put("/:id", async (req, res) => {
  try {
    const updatedClass = await Class.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedClass) {
      return res.status(404).json({ error: "Class not found" });
    }
    res.json(updatedClass);
  } catch (error) {
    res.status(400).json({ error: "Bad request" });
  }
});

// DELETE a class by id
router.delete("/:id", async (req, res) => {
  try {
    const deletedClass = await Class.findByIdAndDelete(req.params.id);
    if (!deletedClass) {
      return res.status(404).json({ error: "Class not found" });
    }
    res.json({ message: "Class deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
