const homeGooglePage = require('../../pages/homeGooglePage');
const resultsGooglePage = require('../../pages/resultsGooglePage');
const homeWikipediaPage = require("../../pages/homeWikipediaPage");

describe('Solution excercise 2', () =>{

    function navigateToGoogle() {
        cy.visit('/');
        homeGooglePage.clickRejectCookiesButton();
    }

    beforeEach('Clear data', () => {
        cy.clearCookies();
        cy.clearLocalStorage();
    });
    
    // it ('Verify Google page', ()=>{
    //     navigateToGoogle();
    //     cy.title().should('eq', 'Google');
    //     cy.log('Title was displayed successfully');
    // });

    // it('Search value', () => {
    //     navigateToGoogle();
    //     homeGooglePage.typeSearchValue();
    //     cy.fixture('values.json').then((data) => {
    //         homeGooglePage.verifyTitle(data.searchValue, ' - Buscar con Google');
    //     });
    // }); 

    // it('Select Wikipedia link', () => {
    //     navigateToGoogle();
    //     homeGooglePage.typeSearchValue();
    //     resultsGooglePage.visitUrl('Wikipedia');
    //     resultsGooglePage.verifyLink();
    // });

    // it('Search year of first automatic process', () => {
    //     cy.fixture('values.json').then((data) => {
    //         const wikipediaUrl = data.wikipediaUrl;
    //         cy.visit(wikipediaUrl);
            
    //         homeWikipediaPage.findYearBeforePhrase();
    //     });
    // });

    // it('Search year of first automatic process (complete flow)', () => {
    //     navigateToGoogle();
    //     cy.title().should('eq', 'Google');
    //     homeGooglePage.typeSearchValue();
    //     cy.fixture('values.json').then((data) => {
    //         homeGooglePage.verifyTitle(data.searchValue, ' - Buscar con Google');
    //     });
    //     cy.visit('https://es.wikipedia.org/wiki/Automatizaci%C3%B3n');
    //     //resultsGooglePage.visitUrl('Wikipedia');
    //     resultsGooglePage.verifyLink();
    //     cy.fixture('values.json').then((data) => {
    //         const wikipediaUrl = data.wikipediaUrl;
    //         cy.visit(wikipediaUrl);
    //         homeWikipediaPage.findYearBeforePhrase();
    //     });
    // })

    it('Search year of first automatic process (complete flow)', () => {
        navigateToGoogle();
        cy.title().should('eq', 'Google');
        homeGooglePage.typeSearchValue();
        cy.fixture('values.json').then((data) => {
            homeGooglePage.verifyTitle(data.searchValue, ' - Buscar con Google');
        });
        cy.fixture('values.json').then((data) => {
            const wikipediaUrl = data.wikipediaUrl;
            cy.visit(wikipediaUrl);
        cy.origin('https://es.wikipedia.org', () => {
        
        });
        resultsGooglePage.verifyLink(); 
        homeWikipediaPage.findYearBeforePhrase();
        });
    });
});
