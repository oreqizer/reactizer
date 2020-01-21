const dotenv = require("dotenv-safe");

const env = dotenv.config({
  allowEmptyValues: true,
  path: ".env",
  example: ".env.example",
});

module.exports = env.parsed;
