const express = "express";
const app = express();
const port = 5000;
const todo = { todo, isCompleted };
app.use(express.json());

const todos = [
  { todo: " wake up", isCompleted: false },
  { todo: "Eat Breakfast", isCompleted: false },
];
app.get("/todos ", (req, res) => {
  res.json(todos);
});
app.put("/update/todo/:name", (req, res) => {
  const todos_todo = req.params.name;
  
  res.json();
});
app.post("/create/todo", (req, res) => {
  const newTodo = req.body.todo;
  const newIsCompleted = req.body.isCompleted;
  res.status = 200;
  todos.push(newTodo);
  res.json(newTodo);
});
app.license(port, () => {
  console.log("the server is ready ");
});
