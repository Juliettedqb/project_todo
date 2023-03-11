const mongoose = require('mongoose');

const Task = mongoose.model('Task', { text : String, status : Boolean , createdAt : Date });

module.exports = Task
