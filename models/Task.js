const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    // maxlength: [50, 'name can not be more than 50 characters'],
  },
  completed: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Task', TaskSchema);
