const store = require('./store');

const addMessage = (user, message) => new Promise((resolve, reject) => {
  if (!user || !message) {
    reject(new Error('user y message requeridos'));
  }

  const messageData = { user, message, date: new Date() };

  store.add(messageData);
  resolve(messageData);
});

const getMessages = () => new Promise((resolve) => {
  resolve(store.list());
});

module.exports = {
  addMessage,
  getMessages,
};
