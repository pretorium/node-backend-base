const store = require('./store');
require('dotenv').config();

const addMessage = (chat, user, message, file) => new Promise((resolve, reject) => {
  let fileUrl = '';
  if (!user || !message || !chat) {
    reject(new Error('user, message y chat requeridos'));
  }

  if (file) {
    fileUrl = `http://localhost:${process.env.PORT || 4000}/public/files/${file.filename}`;
  }

  const messageData = {
    chat, user, message, date: new Date(), fileUrl,
  };

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
