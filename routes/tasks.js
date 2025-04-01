const express = require('express');
const router = express.Router();
const Task = require('../models/tasks');
const authMiddleware = require('../middelware/auth');

router.post('/', authMiddleware, async (req, res) => {
  const { title, description ,dueDate } = req.body;
  try {
    const task = new Task({
      title,
      description,
      createdBy: req.user , 
      dueDate,
      completed:false,
    });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', authMiddleware, async (req, res) => {
  try {
    const tasks = await Task.find({
      $or: [{ createdBy: req.user }] 
    })
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id', authMiddleware, async (req, res) => {
  const { title, description, completed } = req.body;
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ msg: 'Task not found' });
    if (task.createdBy.toString() !== req.user)
      return res.status(403).json({ msg: 'Not authorized' });

    task.title = title || task.title;
    task.description = description || task.description;
    task.completed = completed !== undefined ? completed : task.completed;

    await task.save();
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ msg: 'Task not found' });
    if (task.createdBy.toString() !== req.user)
      return res.status(403).json({ msg: 'Not authorized' });

    await task.deleteOne();
    res.json({ msg: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;