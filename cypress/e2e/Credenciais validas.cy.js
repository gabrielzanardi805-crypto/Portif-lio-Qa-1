describe.only('fluxo de autenticação', () => {
  it('Exibir tela de inventário após login bem-sucedido', () => {
    cy.visit('https://front.serverest.dev/login')
cy.get('[data-testid="email"]').type('gabriel@qa.com.br')
cy.get('[data-testid="senha"]').type('teste')
cy.get('[data-testid="senha"]').should('have.value', 'teste')
cy.get('[data-testid="entrar"]').click()    
cy.get('h1').should('have.text', 'Serverest Store')





  })
})  
    

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://front.serverest.dev/login')
  })
})
