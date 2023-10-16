import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
const homeGooglePage = require('../../../pages/homeGooglePage');
const resultsGooglePage = require('../../../pages/resultsGooglePage');

Given('I visit Google', () => {
  cy.visit('/');
});

And('I reject Google cookies', () => {
  homeGooglePage.clickRejectCookiesButton();
});

Then('I should see the title as {string}', (title) => {
  cy.title().should('eq', title);
});

When('I search for a value', () => {
  homeGooglePage.typeSearchValue();
});

Then('the title should display the search value with {string}', (suffix) => {
  homeGooglePage.typeSearchValue();
  
  cy.fixture('values.json').then((data) => {
      cy.title().should((title) => {
          expect(title.toLowerCase()).to.eq((data.searchValue + suffix).toLowerCase());
      });
  });
});

And('I select the Wikipedia link', () => {
  resultsGooglePage.visitUrl('Wikipedia');
});