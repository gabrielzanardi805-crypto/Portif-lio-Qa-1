describe('fluxo de autenticação', () => {
  it('exibir mensagem de erro para campos vazios e-mail e senha obrigatórios', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="entrar"]').click()
    cy.get(':nth-child(4) > :nth-child(2)').should('have.text', 'Password é obrigatório')
    cy.get(':nth-child(3) > :nth-child(2)').should('have.text', 'Email é obrigatório')
  
  })
})