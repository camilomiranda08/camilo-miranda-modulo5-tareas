import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import authMiddleware from "./middlewares/authMiddleware.js";
import validationMiddleware from "./middlewares/validationMiddleware.js";

const app = express();
const port = 3003;

app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get("/students", (req, res) => {
  const filePath = path.join(__dirname, "students.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.status(500).json({ message: "Error reading file" });
      return;
    }

    const students = JSON.parse(data);
    res.json(students);
  });
});

app.get("/students/:id", (req, res) => {
  const studentId = parseInt(req.params.id, 10);
  const filePath = path.join(__dirname, "students.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.status(500).json({ message: "Error reading file" });
      return;
    }

    const students = JSON.parse(data);
    const student = students.find((s) => s.id === studentId);

    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ message: "Student not found" });
    }
  });
});

app.delete("/students/:id", authMiddleware, (req, res) => {
  const studentId = parseInt(req.params.id, 10);
  const filePath = path.join(__dirname, "students.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.status(500).json({ message: "Error reading file" });
      return;
    }

    let students = JSON.parse(data);
    const initialLength = students.length;
    students = students.filter((s) => s.id !== studentId);

    if (students.length < initialLength) {
      fs.writeFile(filePath, JSON.stringify(students, null, 2), (err) => {
        if (err) {
          res.status(500).json({ message: "Error writing file" });
          return;
        }
        res.status(204).send();
      });
    } else {
      res.status(404).json({ message: "Student not found" });
    }
  });
});

app.post("/students", authMiddleware, validationMiddleware, (req, res) => {
  const { name, age, major } = req.body;

  const filePath = path.join(__dirname, "students.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading file" });
    }

    const students = JSON.parse(data);
    const newId = students.length ? students[students.length - 1].id + 1 : 1;
    const newStudent = { id: newId, name, age, major };

    students.push(newStudent);

    fs.writeFile(filePath, JSON.stringify(students, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ message: "Error writing file" });
      }

      res.status(201).json(newStudent);
    });
  });
});

app.put("/students/:id", authMiddleware, validationMiddleware, (req, res) => {
  const studentId = parseInt(req.params.id, 10);
  const { name, age, major } = req.body;

  const filePath = path.join(__dirname, "students.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading file" });
    }

    const students = JSON.parse(data);
    const student = students.find((s) => s.id === studentId);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    if (name) {
      if (typeof name !== "string" || name.trim() === "") {
        return res.status(400).json({ message: "Invalid name" });
      }
      student.name = name;
    }
    if (age) {
      if (typeof age !== "number" || age < 0) {
        return res.status(400).json({ message: "Invalid age" });
      }
      student.age = age;
    }
    if (major) {
      student.major = major;
    }

    fs.writeFile(filePath, JSON.stringify(students, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ message: "Error writing file" });
      }
      res.status(200).json(student);
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
