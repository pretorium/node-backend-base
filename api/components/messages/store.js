const Model = require('./model');

const addMessage = (message) => {
  const myMessage = new Model(message);
  myMessage.save();
};

const getMessages = async (filterByUser) => {
  let filter = {};
  if (filterByUser) {
    filter = { user: filterByUser };
  }
  const messages = await Model.find(filter).populate('user');
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
