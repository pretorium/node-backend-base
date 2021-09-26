/* eslint-disable no-console */
const db = require('mongoose');
require('dotenv').config();
const Model = require('./model');

const connectDB = async () => {
  try {
    await db.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('-> [Base de datos conectada]');
  } catch (error) {
    console.log(error);
    process.exit(1); /** Esto detiene el server */
  }
};

connectDB();

const addMessage = (message) => {
  const myMessage = new Model(message);
  myMessage.save();
};

const getMessages = async (filterByUser) => {
  let filter = {};
  if (filterByUser) {
    filter = { user: filterByUser };
  }
  const messages = await Model.find(filter);
  return messages;
};

const updateMessage = async (id, message) => {
  const foundMessage = await Model.findOne({ _id: id });
  foundMessage.message = message;
  await foundMessage.save();
  return foundMessage;
};

const deleteMessage = async (id) => {
  await Model.deleteOne({ _id: id });
};

module.exports = {
  add: addMessage,
  list: getMessages,
  update: updateMessage,
  delete: deleteMessage,
};
