const express = require("express");
const todoModel = require("./schema");
const db = require("./db");

const app = express();
app.use(express.json());

app.get("/todos", (req, res) => {
  todoModel
    .find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/todos/complete", (req, res) => {
  todoModel
    .find({ isCompleted: "true" })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.post("/create/todo", (req, res) => {
  const { task, description, deadline, isCompleted, priority } = req.body;
  const todo = new todoModel({
    task,
    description,
    deadline,
    isCompleted,
    priority,
  });
  todo
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.put("/update/todo/:id", (req, res) => {
  const _id = req.params.id;

  const { task, description, deadline, isCompleted, priority } = req.body;

  todoModel
    .findOneAndUpdate(
      { _id },
      { task, description, deadline, isCompleted, priority },
      { new: true }
    )
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
app.delete("/delete/todo/:id", (req, res) => {
  const _id = req.params.id;
  todoModel
    .findOneAndRemove({ _id })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
