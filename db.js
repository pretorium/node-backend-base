/* eslint-disable no-console */
const db = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await db.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('💾 ¡Database connection successful!');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
