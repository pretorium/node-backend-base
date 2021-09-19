const express = require('express');
const router = express.Router();
const { addMessage, getMessages } = require('./controller');
const handleResponse = require('../../network/response');

router.post('/', async (req, res) => {
  const { body: { user, message } } = req;
  try {
    const fullMessage = await addMessage(user, message);
    handleResponse.success(res, { data: fullMessage });
  } catch (error) {
    const errorObj = {
      errorMessage: error.message || 'Error interno',
      errorMessageDetail: `[POST][addMessage]: ${error}`,
    };
    handleResponse.error(res, errorObj);
  }
});

router.get('/', async (_, res) => {
  try {
    const messages = await getMessages();
    handleResponse.success(res, { data: messages });
  } catch (error) {
    const errorObj = {
      errorMessage: error.message || 'Error interno',
      errorMessageDetail: `[GET][getMessages]: ${error}`,
    };
    handleResponse.error(res, errorObj);
  }
});

module.exports = router;
