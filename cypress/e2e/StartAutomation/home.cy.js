describe('Register Case', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
    });

    it ('Show Pet List', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/')
        cy.get('.button').click();
        cy.get('.header__home').click();
    });

    it('url access', () =>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/login');
        cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    });


    it('Speak us', () =>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/home');
        cy.get('.header__message').click()
    });

});