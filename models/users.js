const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const teacherSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }, 
    area: { type: String, required: true }
})

module.exports = {
    Student: mongoose.model("Student", studentSchema),
    Teacher: mongoose.model("Teacher", teacherSchema)
}