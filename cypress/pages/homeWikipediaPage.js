class homeWikipediaPage {

    // Método para buscar el año que está antes de la frase "primer proceso automa"
    findYearBeforePhrase() {
        // Buscar en todos los párrafos el año que precede a la frase "primer proceso automa"
        let foundYear;
        cy.get('p').contains(/(\d{4}).*?primer proceso/).then(($el) => {
            // Extraer el año usando una expresión regular
            const regex = /(\d{4}).*?primer proceso/;
            const match = regex.exec($el.text());
            if (match) {
                foundYear = match[1];
                cy.log(`The year of coincidence is: ${foundYear}`);
            } else {
                cy.log('Results not found.');
            }
        });
        return foundYear;
    }

    // findYearBeforePhrase() {
    //     // Retorna el resultado de la operación asíncrona
    //     return cy.get('p').contains(/(\d{4}).*?primer proceso/).then(($el) => {
    //         const regex = /(\d{4}).*?primer proceso/;
    //         const match = regex.exec($el.text());
    //         if (match) {
    //             const foundYear = match[1];
    //             cy.log(`The year of coincidence is: ${foundYear}`);
    //             return foundYear; // Retorna el año
    //         } else {
    //             cy.log('Results not found.');
    //             return null; // Retorna null si no hay coincidencias
    //         }
    //     });
    //}
    
    
}
    
module.exports = new homeWikipediaPage();
