const dotenv = require('dotenv');

const env = dotenv.config();

module.exports = {
  client: {
    service: {
      name: 'quiz-app',
      url: env.parsed.VITE_GRAPHQL_ENDPOINT,
    },
  },
};
