const store = require('./store');

const addChat = (users) => new Promise((resolve, reject) => {
  if (!users || users.length === 0) {
    reject(new Error('users requerido'));
  }

  const chat = { users };

  store.add(chat);
  resolve(chat);
});

const getChats = (userId) => new Promise((resolve) => {
  resolve(store.list(userId));
});

module.exports = {
  addChat,
  getChats,
};
