const express = require("express");
const router = express.Router();
const jwt = require("jwt-simple");
const { Teacher, Student } = require("../models/users");
const secret = process.env.JWT_SECRET || "default_secret";



router.post("/signup/student", async (req, res) => {
    if(!req.body.username || !req.body.password || !req.body.email) {
      res.status(400).json({ error: "All fields are required" });
    }
    const newStudent = new Student({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
    try {
      await newStudent.save();
      res.sendStatus(201)
    }
    catch (err) {
      res.status(400).send(err.message);
    }
  })
  
router.post("/signup/teacher", async (req, res) => {
    if(!req.body.username || !req.body.password || !req.body.email || !req.body.area) {
      res.status(400).json({ error: "All fields are required" });
    }
    const newTeacher = new Teacher({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      area: req.body.area
    })
    try {
      await newTeacher.save();
      res.sendStatus(201)
    }
    catch (err) {
      res.status(400).send(err.message);
    }
  })
  
router.post("/login", async (req, res) => {
    //Only email and password are required to login
    if(!req.body.email || !req.body.password) {
      res.status(401).json({ error: "Email and password are required" });
      return
    }
    try {
      const user = await Student.findOne({email: req.body.email});
      let userType = "student";
  
      if (!user) {
        user = await Teacher.findOne({email: req.body.email});
        userType = "teacher";
      }
      
      if (!user) {
        res.status(401).json({ error: "User not found" });
        return
      }
      else {
        if(user.password === req.body.password) {
          const token = jwt.encode({email: user.email}, secret);
          res.json({ token: token });
        }
        else {
          res.status(401).json({ error: "Incorrect password" });
        }
      }
    }
    catch (err) {
      res.status(400).send(err.message);
    }
  })

  module.exports = router;