const express = require('express');
const router = express.Router();
const {
  addMessage, getMessages, updateMessage, deteleMessage,
} = require('./controller');
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

router.get('/', async (req, res) => {
  const { query } = req;
  try {
    const messages = await getMessages(query);
    handleResponse.success(res, { data: messages });
  } catch (error) {
    const errorObj = {
      errorMessage: error.message || 'Error interno',
      errorMessageDetail: `[GET][getMessages]: ${error}`,
    };
    handleResponse.error(res, errorObj);
  }
});

router.patch('/:id', async (req, res) => {
  const { params: { id }, body: { message } } = req;
  try {
    const update = await updateMessage(id, message);
    handleResponse.success(res, { data: update });
  } catch (error) {
    const errorObj = {
      errorMessage: error.message || 'Error interno',
      errorMessageDetail: `[PATCH][updateMessage]: ${error}`,
    };
    handleResponse.error(res, errorObj);
  }
});

router.delete('/:id', async (req, res) => {
  const { params: { id } } = req;
  try {
    await deteleMessage(id);
    handleResponse.success(res);
  } catch (error) {
    const errorObj = {
      errorMessage: error.message || 'Error interno',
      errorMessageDetail: `[PATCH][updateMessage]: ${error}`,
    };
    handleResponse.error(res, errorObj);
  }
});

module.exports = router;
