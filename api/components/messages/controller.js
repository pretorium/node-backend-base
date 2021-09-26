const store = require('./store');

const addMessage = (user, message) => new Promise((resolve, reject) => {
  if (!user || !message) {
    reject(new Error('user y message requeridos'));
  }

  const messageData = { user, message, date: new Date() };

  store.add(messageData);
  resolve(messageData);
});

const getMessages = (query) => new Promise((resolve) => {
  const { user } = query;
  const filterByUser = user || null;

  resolve(store.list(filterByUser));
});

const updateMessage = (id, message) => new Promise((resolve, reject) => {
  if (!id || !message) {
    reject(new Error('id y message requeridos'));
  }

  resolve(store.update(id, message));
});

const deteleMessage = (id) => new Promise((resolve, reject) => {
  if (!id) {
    reject(new Error('id requerido'));
  }

  resolve(store.delete(id));
});

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deteleMessage,
};
