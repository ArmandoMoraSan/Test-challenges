const homeGooglePage = require('../../pages/homeGooglePage');
const resultsGooglePage = require('../../pages/resultsGooglePage');

describe('Solution excercise 2', () =>{

    beforeEach(() => {
        cy.visit('/');
        homeGooglePage.clickRejectCookiesButton();
    });

    it ('Google page is accessed', ()=>{
        cy.title().should('eq', 'Google');
        cy.log('Title was displayed successfully');
    });

    it('Search value', () => {
        homeGooglePage.typeSearchValue();
        cy.fixture('values.json').then((data) => {
            cy.title().should((title) => {
                // Convertir ambos títulos a minúsculas antes de comparar
                expect(title.toLowerCase()).to.eq((data.searchValue + ' - Buscar con Google').toLowerCase());
            });
        });
    }); 

    it('Select Wikipedia link', () => {
        homeGooglePage.typeSearchValue();
        resultsGooglePage.visitUrl('Wikipedia');

    });
});
