describe('fluxo de autenticação', () => {
  it('exibir mensagem de erro para credenciais inválidas', () => {
    // Passo 1: Acessar a página de login
    cy.visit('https://front.serverest.dev/login')
    // Passo 2: Preencher os campos de login
    cy.get('[data-testid="email"]').type('gabrie@qa.com.br')
    cy.get('[data-testid="email"]').should('have.value', 'gabrie@qa.com.br')
    cy.get('[data-testid="senha"]').type('Teste')
    cy.get('[data-testid="senha"]').should('have.value', 'Teste')
    // Passo 3: clicar no botão entrar
    cy.get('[data-testid="entrar"]').click()
   cy.get('.alert > :nth-child(2)').should('have.text', 'Email e/ou senha inválidos')

    




  })
})