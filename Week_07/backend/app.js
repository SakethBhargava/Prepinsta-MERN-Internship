const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors"); // Import cors middleware
const Course = require("./models/course");
const Task = require("./models/task");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS

// MongoDB connection
mongoose
  .connect("mongodb://localhost/student_tasks", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Define route for handling POST requests
app.post("/courses/:courseId/tasks", async (req, res) => {
  try {
    const { courseId, taskName, dueDate, details } = req.body;

    // Create new task
    const newTask = new Task({ courseId, taskName, dueDate, details });
    await newTask.save();

    res.json({ message: "Task created successfully", task: newTask });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
