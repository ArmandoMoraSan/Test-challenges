const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = {
  e2e: {
    baseUrl: "https://www.google.com",
    specPattern: "**/*.feature"
  },
  cucumberPreprocessor: {
    nonGlobalStepDefinitions: true
  }
};

cypressCucumberPreprocessor: {
  stepDefinitions: "cypress/e2e"
}
