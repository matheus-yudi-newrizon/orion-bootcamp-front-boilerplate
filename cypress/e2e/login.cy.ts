describe('login-page spec', () => {
  it('should logon if the credentials are right', () => {
    cy.visit('http://localhost:4200/login');
    cy.get('.login-page__width__email-input').type('felipe@teste.com');
    cy.get('.login-page__width__password').type('Fel123@');
    cy.get('button').contains('LOG IN').click();
  });
});
