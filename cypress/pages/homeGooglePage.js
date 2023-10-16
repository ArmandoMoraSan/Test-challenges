class homeGooglePage {

    // Puedes cambiar estos a selectores CSS si es posible
    searchBarInput = () => cy.get('textarea[title="Buscar"]').should('be.visible');
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
}
 
module.exports = new homeGooglePage();
