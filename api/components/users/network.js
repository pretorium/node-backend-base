const express = require('express');
const router = express.Router();
const {
  addUser,
  getUsers,
} = require('./controller');
const handleResponse = require('../../network/response');

router.post('/', async (req, res) => {
  const { body: { name } } = req;
  try {
    const newUser = await addUser(name);
    handleResponse.success(res, { data: newUser }, 201);
  } catch (error) {
    const errorObj = {
      errorMessage: error.message || 'Error interno',
      errorMessageDetail: `[POST][addUser]: ${error}`,
    };
    handleResponse.error(res, errorObj);
  }
});

router.get('/', async (_, res) => {
  try {
    const users = await getUsers();
    handleResponse.success(res, { data: users });
  } catch (error) {
    const errorObj = {
      errorMessage: error.message || 'Error interno',
      errorMessageDetail: `[GET][getUsers]: ${error}`,
    };
    handleResponse.error(res, errorObj);
  }
});

module.exports = router;
