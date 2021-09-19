const express = require('express');
require('dotenv').config();
const router = require('./api/network/routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
router(app);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log((`🚀 API is running in http://localhost:${port}`));
});
