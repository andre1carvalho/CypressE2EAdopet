import {faker} from '@faker-js/faker'

describe('Register Case', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
    });

    it('Register new User',() => {
        const name = faker.person.fullName();
        const email = faker.internet.email();
        const password = faker.internet.password(12);

        cy.get("[data-test='register-button']").click();
        cy.get("input[data-test='input-name']").type(name);
        cy.get("input[data-test='input-email']").type(email);
        cy.get("input[data-test='input-password']").type(password);
        cy.get("input[data-test='input-confirm-password']").type(password);
        cy.get("button[data-test='submit-button']").click();

    });


});