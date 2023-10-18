class homeGooglePage {

    searchBarInput = () => cy.get('textarea[title="Buscar"], input[title="Buscar"]').should('be.visible');
    searchButton = () => cy.get('(input[value="Buscar con Google"])[2]').should('be.visible');

    typeSearchValue() {
        cy.fixture('values.json').then((data) => {
            this.searchBarInput().type(data.searchValue + '{enter}');
        });
    }

    clickSearchButton() {
        this.searchButton().click();
    }

    clickRejectCookiesButton () {
        cy.get('button[id="W0wltc"]').click({ force: true });
    }

    verifyTitle(searchValue, appendedText) {
        cy.title().should(title => {
            expect(title.toLowerCase()).to.eq((searchValue + appendedText).toLowerCase());
        });
    }
}
 
module.exports = new homeGooglePage();
