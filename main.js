const express = require("express");

const app = express();
const port = 4000;

app.use(express.json())
app.get("/home",(req,res)=>{
    res.status(201)
    res.json("hello world");
})
app.get("/heb", (req, res) => {
  res.status(200);
  res.json("welcome");
});
const users = [
  {
    name: "ahmad",
  },
];
app.post("/", (req, res) => {
  const name = req.body.name;
  const person = { name };
  const newUser={name:req.body.name}
  users.push(person);
  res.status(200);
  res.json(person);
  users.push(newUser);
  res.json(newUser)
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost: ${port}`);
});
