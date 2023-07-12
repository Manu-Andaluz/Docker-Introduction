const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  URI: process.env.DATA_BASE_URI,
};
