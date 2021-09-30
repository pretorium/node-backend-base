const { Schema, model } = require('mongoose');

const mySchema = new Schema({
  chat: {
    type: Schema.ObjectId,
    ref: 'Chat',
  },
  user: {
    type: Schema.ObjectId,
    ref: 'Users',
  },
  message: {
    type: String,
    required: true,
  },
  date: Date,
  file: String,
});

module.exports = model('Message', mySchema);
