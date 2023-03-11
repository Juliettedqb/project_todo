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

// app.get('/test', async(request, response) => {
//     response.status(200).send("hello");
//     const task = new Task({
//         text : "appeler fumiste",
//         status : false,
//         createdAt : new Date()
//     })
//     console.log(task)
//     task.save().then(() => console.log("appeler fumiste"));
// })

app.post('/tasks', async(req, res) => {
    console.log(req.body.text)
    const task = new Task({
        text : req.body.text,
        status : false,
        createdAt : new Date()
    })
    console.log(task)
    const data = await task.save()
    res.status(200).json(data)
})

app.get('/tasks', async(req, res) => {
    const tasks = await Task.find()
    res.status(200).json(tasks)
})

app.put('/tasks/:id/status', async(req, res) => {
    const id = req.params.id;
    console.log(id)
    const task = await Task.findById(id)
    task.status = true
    const data = await task.save()
    res.status(200).json(data)
})

app.put('/tasks/:id', async(req, res) => {
    const id = req.params.id;
    console.log(id)
    const task = await Task.findById(id)
    task.text = req.body.text;
    const data = await task.save()
    res.status(200).json(data)
})

app.delete('/tasks/:id', async(req, res) => {
    const id = req.params.id;
    const task = await Task.deleteOne({_id: id})
    res.status(200).json(task)
})