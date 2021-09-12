const express = require('express');
const router = express.Router();
const handleResponse = require('../../network/response')  





router.get('/', (_, res) => {
  handleResponse.success(res);
});

router.post('/', (_, res) => {
  handleResponse.error(res);
});

module.exports = router