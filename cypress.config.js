const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://main.d27k9wqkcnjscm.amplifyapp.com/',
  },
});
