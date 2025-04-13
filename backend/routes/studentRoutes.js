import express from 'express';
import Student from '../models/Student.js';

const router = express.Router();

// Create
router.post('/', async (req, res) => {
  try {
    const student = new Student(req.body);
    const saved = await student.save();
    res.status(201).json(saved); // Return the saved student with a 201 status code
  } catch (err) {
    res.status(400).json({ error: err.message }); // Bad Request if there's an error
  }
});

// Read All
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students); // Return all students with 200 status
  } catch (err) {
    res.status(500).json({ error: err.message }); // Server error if database query fails
  }
});

// Read One
router.get('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' }); // Handle student not found
    }
    res.status(200).json(student); // Return student with 200 status
  } catch (err) {
    res.status(500).json({ error: err.message }); // Server error if database query fails
  }
});

// Update
router.put('/:id', async (req, res) => {
  try {
    const updated = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ message: 'Student not found' }); // Handle student not found
    }
    res.status(200).json(updated); // Return updated student with 200 status
  } catch (err) {
    res.status(400).json({ error: err.message }); // Bad Request if validation fails
  }
});

// Delete
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Student.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Student not found' }); // Handle student not found
    }
    res.status(200).json({ message: 'Student deleted' }); // Success message with 200 status
  } catch (err) {
    res.status(500).json({ error: err.message }); // Server error if database query fails
  }
});

export default router;
