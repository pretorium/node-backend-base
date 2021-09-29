const messages = require('../components/messages/network');
const users = require('../components/users/network');

const routes = (app) => {
  app.use('/message', messages);
  app.use('/user', users);
};

module.exports = routes;
