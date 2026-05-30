const express = require('express');
const userRouter = require('./routes/users');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/user', userRouter);

app.listen(PORT, 'localhost', () => {
  console.log(`Server started on port : ${PORT}`);
});