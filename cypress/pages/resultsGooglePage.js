class ResultsGooglePage {
    // constructor() {
    //     this.urls = [];
    // }

    // // Method to store in an array all the links
    // storeSearchResults() {
    //     return new Cypress.Promise((resolve, reject) => {
    //         const urls = [];
    //         cy.get('h3').each(($el, index, $list) => {
    //             cy.wrap($el).parents('a').first().invoke('attr', 'href').then(href => {
    //                 urls.push(href);
    //                 cy.log(`URL ${index + 1}: ${href}`); 
    //                 if (index === $list.length - 1) {
    //                     this.urls = urls;
    //                     cy.log('URLs list:', this.urls); 
    //                     resolve();
    //                 }
    //             }, error => {
    //                 // In case of error, method continues with the followin element
    //                 cy.log(`href not found for the element ${index}: ${error.message}`);
    //             });
    //         });
    //     });
    // }
    
    // // Method to navigate to the link that contains the parameter "urlPart"
    // visitPageByUrlPart(urlPart) {
    //     const urlToVisit = this.urls.find(url => url && url.includes(urlPart));
    //     if (urlToVisit) {
    //         cy.visit(urlToVisit);
    //     } else {
    //         throw new Error(`There's no URL matching with: ${urlPart}`);
    //     }
    // }

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
            cy.get('h3').contains(urlPart).parent('a').click();
        });
    }

}
module.exports = new ResultsGooglePage();


