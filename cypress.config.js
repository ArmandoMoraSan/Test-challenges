module.exports = {
  e2e: {
    baseUrl: "https://www.google.com",
    specPattern: "**/*.feature"
  },
  cucumberPreprocessor: {
    nonGlobalStepDefinitions: true
  }
};
