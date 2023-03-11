const express = require('express');
const Task = require("./model/task");
const mongoose = require('mongoose');
const app = express();
const port = 3000;

const bp = require('body-parser')
mongoose.connect('mongodb://127.0.0.1:27017/task');
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });

app.get('/test', async(request, response) => {
    response.status(200).send("hello")
})