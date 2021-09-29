const store = require('./store');

const addUser = (name) => new Promise((resolve, reject) => {
  if (!name) {
    reject(new Error('name requerido'));
  }

  const user = { name };

  store.add(user);
  resolve(user);
});

const getUsers = () => new Promise((resolve) => {
  resolve(store.list());
});

module.exports = {
  addUser,
  getUsers,
};
