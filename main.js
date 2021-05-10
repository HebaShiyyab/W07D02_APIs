const express = require('express');

const app = express();
const port = 4000;
app.get("/heba", (req,res)=>{
    res.status(200);
    res.json("welcome")
})
 
app.get()


 app.listen(port,()=>{
     console.log(`server run on port ${port}`);
 })