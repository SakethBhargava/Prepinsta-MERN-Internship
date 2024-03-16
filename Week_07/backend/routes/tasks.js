const express = require("express");
const router = express.Router();
const Course = require("../models/course");
const Task = require("../models/task");

// Route to retrieve tasks for a specific course
router.get("/:courseId/tasks", async (req, res) => {
  try {
    const courseId = req.params.courseId;

    // Find the course by courseId
    const course = await Course.findOne({ courseId });

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    // Find tasks associated with the course
    const tasks = await Task.find({ courseId });

    res.json({ course, tasks });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
