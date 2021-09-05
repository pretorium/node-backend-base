const express = require('express');
const router = new express.Router();
const handleResponse = require('./api/utils/response')
require('dotenv').config()

const variable = 'hola';

console.log('hola');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(router);

router.get('/message', (_, res) => {
  handleResponse.success(res);
});

router.post('/message', (_, res) => {
  handleResponse.error(res);
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log((`-> API is running in https://localhost:${port}`));
});
