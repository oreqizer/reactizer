const dotenv = require("dotenv-safe");

const env = dotenv.config({
  allowEmptyValues: true,
  path: ".env",
  example: ".env.example",
});

module.exports = {
  client: {
    includes: ["./src/**/*.{ts,tsx}"],
    output: "./src",
    service: {
      name: "Reactizer",
      url: env.required.API_URL,
    },
  },
};
