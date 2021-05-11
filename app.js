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
  const found = todos.find((element) => {
    return element.name === newTodo;
  });
  if (found) {
    res.status(201);
    res.json(found);
  }else{
      res.status(404);
  }
});

app.delete("/delete/todo/:name", (req, res) => {
    const name = req.params.name;
    const found = todos.find((element)=>{
        return element.name === newTodo;
    })
    if(found){
      todos.slice(1)  
      res.json(found);
      res.status(201)
    }
});
app.post("/create/todo", (req, res) => {
  const newTodo = req.body.todo;
  const newIsCompleted = req.body.isCompleted;
  res.status(200);
  todos.push(newTodo);
  res.json(newTodo);
});

app.put("/complete/todo/:name",(req,res)=>{
    const isCompleted = res.todos.isCompleted;
    if(!isCompleted){
        res.status(404);

    }else{
        return true;

    }
})
app.all("/completed/todos",(req,res,next)=>{
return next()
})
app.license(port, () => {
  console.log("the server is ready ");
});
