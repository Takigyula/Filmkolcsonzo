describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173');
   
  

    // Regisztrálás:
    // cy.wait(1000);
    // cy.contains('Regisztráció').click();
    // cy.wait(1000);
    // cy.get('input[id="email"]').type('teszteles@gmail.com');
    // cy.wait(1000);
    // cy.get('input[id="password"]').type('teszt1234');
    // cy.wait(1000);
    // cy.get('button[class="avatarBTN"]').click();
    // cy.wait(1000);
    // cy.get('div[class="kep"]').get('img[src="/images/output/avatar_008.png"]').click();
    // cy.get('button[class="button-37"]').click()
    // cy.wait(1000);

    // Bejelentkezés:
    cy.contains('Bejelentkezés').click();
    cy.wait(1000);
    cy.get('input[id="email"]').type('teszteles@gmail.com');
    cy.get('input[id="password"]').type('teszt1234');
    cy.wait(1000)
    cy.get('button[class="button-37"]').click();
    cy.contains('Előfizetés').click();
    cy.get('input[type=text]').type('1234 5678 9012 3456'); 
  })
})
