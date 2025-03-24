
const VALID_USER = 'admin';
const VALID_PASSWORD = 'test';
const INVALID_PASSWORD = '1234';

describe('Login specs', () => {

    it('visit the login page', () => {
        cy.visit('/');
    });

    it('should name input has the focus when it clicks on it', () => {

        cy.visit('/');
        cy.findByRole('textbox').click();

        cy.findByRole('textbox').should('have.focus');

    });

    it('should show an alert with a message when type invalid credentials', () => {

        cy.visit('/');
        cy.findByRole('textbox').as('userInput');
        cy.get('input[name="password"]').as('passwordInput');
        cy.get('@userInput').type(VALID_USER);
        cy.get('@passwordInput').type(INVALID_PASSWORD);

        cy.get('form').submit();

        cy.findByRole('alert').should(
            'have.text',
            'Usuario y/o password no válidos'
          );
    });

    it('should enter to the application when type valid credentials', () => {

        cy.visit('/');
        cy.findByRole('textbox').as('userInput');
        cy.get('input[name="password"]').as('passwordInput');
        cy.get('@userInput').type(VALID_USER);
        cy.get('@passwordInput').type(VALID_PASSWORD);

        cy.get('form').submit();
        
        cy.url().should('contain', '/submodule-list');
    });


})