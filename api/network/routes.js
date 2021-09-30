const messages = require('../components/messages/network');
const users = require('../components/users/network');
const chat = require('../components/chat/network');

const routes = (app) => {
  app.use('/message', messages);
  app.use('/user', users);
  app.use('/chat', chat);
};

module.exports = routes;
