const express = require('express');
const userRouter = require('');
const app = express();
const PORT = 3000;

app.get("/", (req, res)=>{
  res.send("<h1>Just a sampe project created he hee<h1>");
});

app.listen(PORT, 'localhost', () => {
  console.log(`Server started on port : ${PORT}`);
});