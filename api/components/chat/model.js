const { Schema, model } = require('mongoose');

const mySchema = new Schema({
  users: [{
    type: Schema.ObjectId,
    ref: 'Users',
  }],
});

module.exports = model('Chat', mySchema);
