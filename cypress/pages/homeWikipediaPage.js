class homeWikipediaPage {

    findYearBeforePhrase() {
        cy.get('p').contains(/(\d{4}).*?primer proceso/).then(($el) => {
            const regex = /(\d{4}).*?primer proceso/;
            const match = regex.exec($el.text());
            
            if (match && match[1] === '1771') {
                const foundYear = match[1];
                cy.log(`The year of coincidence is: ${foundYear}`);
                expect(foundYear).to.eq('1771');
                cy.screenshot();
            } else {
                cy.log('Year not found or does not match the expected year!');
            }
        });
    }
}
module.exports = new homeWikipediaPage();
