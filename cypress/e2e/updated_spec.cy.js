describe('Subscription Functionality', () => {
    it('should click the subscription button, fill in the data, and subscribe', () => {
        // Visit the page containing the subscription button
        cy.visit('/path-to-your-subscription-page'); // Adjust the URL as needed

        // Click the subscription button
        cy.get('#subscription-button').click(); // Adjust the selector as needed

        // Fill in the required fields
        cy.get('#cim').type('Test Series Title'); // Adjust the selector as needed
        cy.get('#epizodokSzama').type('10'); // Adjust the selector as needed
        cy.get('#plakat').type('test-poster-url'); // Adjust the selector as needed
        cy.get('#leiras').type('This is a test description.'); // Adjust the selector as needed
        cy.get('#szereplok').type('Test Actor'); // Adjust the selector as needed
        cy.get('#trailer').type('test-trailer-url'); // Adjust the selector as needed

        // Select categories and statuses if applicable
        cy.get('#kategoriak').select('Test Category'); // Adjust the selector as needed
        cy.get('#statuszok').select('Test Status'); // Adjust the selector as needed

        // Submit the form
        cy.get('#submit-button').click(); // Adjust the selector as needed

        // Verify the success message or redirection
        cy.contains('Success message or expected text').should('be.visible'); // Adjust as needed
    });
});
