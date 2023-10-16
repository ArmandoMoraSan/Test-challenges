// import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
// const homeWikipediaPage = require('../../../pages/homeWikipediaPage');

// let wikipediaUrl;

// Given('I am on the Wikipedia page', () => {
//     cy.fixture('values.json').then((data) => {
//         wikipediaUrl = data.wikipediaUrl;
//         cy.visit(wikipediaUrl);
//     });
// });

// Then('the title should match the Wikipedia page', () => {
//     cy.fixture('values.json').then((data) => {
//         cy.title().should((title) => {
//             expect(title.toLowerCase()).to.eq((data.searchValue + ' - Wikipedia, la enciclopedia libre').toLowerCase());
//         });
//     });
// });

// When('I search for the year of the first automatic process', () => {
//     homeWikipediaPage.findYearBeforePhrase();
// });

// Then('I should see the year of the first automatic process', () => {
//     const year = findYearBeforePhrase();
    
//     //If year was found, takes a screen shot
//     if(year) {
//         cy.screenshot(`Year_of_coincidence_${year}`);
//     }
// });
