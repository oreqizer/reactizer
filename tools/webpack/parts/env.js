const dotenv = require("dotenv-safe");

const env = dotenv.config({
  allowEmptyValues: true,
  path: ".env",
  example: ".env.example",
});

const __DEV__ = process.env.NODE_ENV !== "production";

module.exports = { env: env.required, __DEV__ };
