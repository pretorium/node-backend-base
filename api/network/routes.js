const messages = require('../components/messages/network');

const routes = (app) => {
  app.use('/message', messages);
};

module.exports = routes;
