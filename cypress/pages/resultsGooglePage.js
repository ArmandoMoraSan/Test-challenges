class ResultsGooglePage {

    //Method to navigate to the link that contains the parameter "urlPart"
    visitUrl(urlPart) {
        cy.get('h3').contains(urlPart).parent('a').invoke('attr', 'href').then((hrefValue) => {
            console.log("Current href:", hrefValue);
    
            // Reading file values.json
            cy.readFile('cypress/fixtures/values.json').then((data) => {
                // Asign current href value to wikipediaUrl
                data.wikipediaUrl = hrefValue;
                cy.writeFile('cypress/fixtures/values.json', data);
            });

            
        });
        cy.fixture('values.json').then((data) => {
            let wikipediaUrl = data.wikipediaUrl; //Asign current wikipediaUrl value from values.json
            cy.visit(wikipediaUrl);
        });
    }

    verifyLink() {
        cy.fixture('values.json').then((data) => {
            let wikipediaUrl = data.wikipediaUrl;
            
            expect(wikipediaUrl.includes('wikipedia')).to.be.true;
        });
    }     
}
module.exports = new ResultsGooglePage();


