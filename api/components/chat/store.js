const Model = require('./model');

const addChat = (chat) => {
  const myChat = new Model(chat);
  myChat.save();
  return myChat;
};

const getChats = async (userId) => {
  let filter = {};
  if (userId) {
    filter = { users: userId };
  }
  const chats = await Model.find(filter).populate('users');
  return chats;
};

module.exports = {
  add: addChat,
  list: getChats,
};
