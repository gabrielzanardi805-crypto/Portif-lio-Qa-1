describe('fluxo de autenticação', () => {
  it('exibir mensagem de erro para campos vazios e-mail e senha obrigatórios', () => {
    // Passo 1: Acessar a página de login
    cy.visit('https://front.serverest.dev/login')
    // Passo 2: clicar no botão entrar sem preencher os campos de login
    cy.get('[data-testid="entrar"]').click()
    // Passo 3: Verificar as mensagens de erro para campos vazios
    cy.get(':nth-child(4) > :nth-child(2)').should('have.text', 'Password é obrigatório')
    cy.get(':nth-child(3) > :nth-child(2)').should('have.text', 'Email é obrigatório')
  })
})