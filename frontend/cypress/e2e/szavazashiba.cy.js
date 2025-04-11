describe('template spec', () => {
    it('passes', () => {
      cy.visit('http://localhost:5173');


        cy.contains('Filmek').click();
        cy.wait(1000);
        cy.get('button[class="slider-btn"]').click()
        cy.wait(1000);
        cy.get('div[class="film-egyedi-tartalom"]').get('img[class="ertekeles-csillag"]').get('img[alt="csillag1"]').click();
        cy.wait(1000);
        cy.contains('Szavazás')
          .should('be.visible') 
          .click();
        cy.wait(1000);



















    })});