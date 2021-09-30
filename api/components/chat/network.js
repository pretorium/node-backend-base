const express = require('express');
const router = express.Router();
const {
  addChat,
  getChats,
} = require('./controller');
const handleResponse = require('../../network/response');

router.post('/', async (req, res) => {
  const { body: { users } } = req;
  try {
    const newChat = await addChat(users);
    handleResponse.success(res, { data: newChat }, 201);
  } catch (error) {
    const errorObj = {
      errorMessage: error.message || 'Error interno',
      errorMessageDetail: `[POST][addChat]: ${error}`,
    };
    handleResponse.error(res, errorObj);
  }
});

router.get('/', async (req, res) => {
  const { query: { userId } } = req;
  try {
    const chats = await getChats(userId);
    handleResponse.success(res, { data: chats });
  } catch (error) {
    const errorObj = {
      errorMessage: error.message || 'Error interno',
      errorMessageDetail: `[GET][getChats]: ${error}`,
    };
    handleResponse.error(res, errorObj);
  }
});

module.exports = router;
