// const homeWikipediaPage = require("../../pages/homeWikipediaPage");

// describe('Solution excercise 2', () => {
//     let wikipediaUrl; 

//     before(() => { 
//         cy.fixture('values.json').then((data) => {
//             wikipediaUrl = data.wikipediaUrl; //Asign current wikipediaUrl value from values.json
//         });
//     });

//     beforeEach(() => {
//         cy.visit(wikipediaUrl); 
//     });
    
//     it('Select Wikipedia link', () => {
//         cy.fixture('values.json').then((data) => {
//             // Verificar el título
//             cy.title().should((title) => {
//                 // Convertir ambos títulos a minúsculas antes de comparar
//                 expect(title.toLowerCase()).to.eq((data.searchValue + ' - Wikipedia, la enciclopedia libre').toLowerCase());
//             });
//         }); 
//     });

//     it('Search year of first automatic process', () => {
//         homeWikipediaPage.findYearBeforePhrase();
//     })
// });
