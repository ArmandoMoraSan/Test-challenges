const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = {
  screenshotsFolder: 'cypress/screenshots',
  e2e: {
    baseUrl: "https://www.google.com",
    specPattern: "**/*spec.js",
    projectId: "hwtsiu",
  },
//   cucumberPreprocessor: {
//     nonGlobalStepDefinitions: true
//   }
// };

// cypressCucumberPreprocessor: {
//   stepDefinitions: "cypress/e2e"
}
