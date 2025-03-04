require("dotenv").config();
const connectDB = require("../db");
const Class = require("../models/Class");

const classesData = [
  {
    title: "Mathematics",
    instructor: "Matthew Donell",
    description: "Introduction to Algebra, Trigonometry, Calculus",
    schedule: ["Monday", "Wednesday"],
    method: "virtual",
  },
  {
    title: "English",
    instructor: "Meredith Kortland",
    description: "Introduction to grammar, syntax, lexico",
    schedule: ["Tuesday", "Wednesday"],
    method: "on campus",
  },
  {
    title: "French",
    instructor: "Padley Perard",
    description: "Introduction to verbs, vocabulary, basic communications",
    schedule: ["Tuesday", "Thursday"],
    method: "online",
  },
  {
    title: "Javascript",
    instructor: "Zachary Hamby",
    description: "Web development using Javascript and its modules",
    schedule: ["Monday", "Wednesday"],
    method: "Learn Anywhere",
  },
  {
    title: "UI/UX Design",
    instructor: "Marvens Scott",
    description: "Web design using bootstrap",
    schedule: ["Wednesday"],
    method: "on campus",
  },
  {
    title: "Communication",
    instructor: "Martha Packard",
    description: "Learn how to communicate better",
    schedule: ["Wednesday"],
    method: "on campus",
  },
  {
    title: "SDEV 255",
    instructor: "Zachary Hamby",
    description:
      "Web design using bootstrap, Javascript intro, node.js, Express...",
    schedule: ["Monday", "Wednesday"],
    method: "on campus",
  },
  {
    title: "Machine Learning",
    instructor: "Tony Galburg",
    description: "Learn AI, build machine learning systems",
    schedule: ["Saturday"],
    method: "on campus",
  },
  {
    title: "Cybersecurity",
    instructor: "Harry Potter",
    description: "Learn how to defend against cyber threats",
    schedule: ["Wednesday", "Friday"],
    method: "online",
  },
];

const seedClasses = async () => {
  try {
    await connectDB();
    await Class.deleteMany({});
    // Insert new dummy data
    await Class.insertMany(classesData);
    console.log("Dummy data inserted successfully");
    process.exit();
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
};

seedClasses();
