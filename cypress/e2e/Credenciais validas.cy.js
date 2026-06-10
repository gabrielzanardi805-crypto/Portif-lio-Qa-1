describe('fluxo de autenticação', () => {
  it('Exibir tela de inventário após login bem-sucedido', () => {
    // Passo 1: Visitar a URL do site
    cy.visit('https://front.serverest.dev/login')
      // Passo 2: Preencher os campos de login
cy.get('[data-testid="email"]').type('gabriel@portfolio.com.br')
cy.get('[data-testid="senha"]').type('1234')
cy.get('[data-testid="senha"]').should('have.value', '1234')
cy.get('[data-testid="entrar"]').click()    
cy.get('h1').should('have.text', 'Serverest Store')
  })
})  

