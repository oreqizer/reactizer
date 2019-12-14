const dotenv = require("dotenv-safe");

const env = dotenv.config({
  allowEmptyValues: true,
  path: ".env",
  example: ".env.example",
});

module.exports = {
  client: {
    service: {
      name: "Reactizer",
      url: env.required.API_URL,
    },
  },
};
