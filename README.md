# Cypress Automation Project for a Google/Wikipedia search

This is a straightforward automation project utilizing Cypress and associated tools to automate web actions, with a primary focus on Google search and Wikipedia navigation.

## Setup

1. Install the required dependencies:

npm install

2. Execute the Cypress tests using one of the following commands:
- To open the Cypress user interface:
  ```
  npm run cypress:open
  ```
- To run the Cypress tests in headless mode:
  ```
  npm run cypress:run
  ```
  
## File Descriptions

1. **package.json**: This file holds the project's npm dependencies and scripts. The provided scripts are for launching and running Cypress tests.

2. **cypress.config.js**: A Cypress configuration file where the base URL and other end-to-end related settings are specified.

3. **ResultsGooglePage.js**: This class consists of methods related to actions and verifications on the Google search results page.

5. **homeWikipediaPage.js**: This class contains methods tied to actions and verifications on the Wikipedia homepage.

6. **homeGooglePage.js**: This class involves methods concerning actions and verifications on the Google homepage.

7. **searchYearFirstAutoProcess.spec.js**: This file houses the primary Cypress test cases. It uses the above-mentioned page classes for performing actions and verifications on both Google and Wikipedia.

8. **values.json**: A simple JSON file bearing data for the tests, such as search values and URLs.

## Contributing

Please read the code documentation and adhere to the coding style established in the existing files. Contributions are highly appreciated!
