const { Schema, model } = require('mongoose');

const mySchema = new Schema({
  name: String,
});

module.exports = model('Users', mySchema);
