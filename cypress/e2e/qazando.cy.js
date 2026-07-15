describe('fluxo de autenticação', () => {
  it('Exibir tela de inventário após login bem-sucedido', () => {
    // Passo 1: Visitar a URL do site
    cy.visit('https://front.serverest.dev/login')
      // Passo 2: Preencher os campos de login
cy.get('[data-testid="email"]').type('gabrielteste@qa.com')
// Passo 3: Preencher o campo de senha
cy.get('[data-testid="senha"]').type('1234')
// Passo 4: Clicar em logar
cy.get('[data-testid="entrar"]').click()
// Passo 5: Verificar se o login foi bem-sucedido
cy.get('h1').should('have.text', 'Serverest Store')

})

// Cenario 2
it('Exibir mensagem de erro ao tentar logar com credenciais inválidas', () => {
// Passo 1 visitar a url do site
cy.visit('https://front.serverest.dev/login')
// Passo 2 preencher o campo de email
cy.get('[data-testid="email"]').type('invalido@teste.com')
// Passo 3: Preencher o campo de senha 
cy.get('[data-testid="senha"]').type('1234')
// Passo 4: Clicar em logar
cy.get('[data-testid="entrar"]').click()
// Passo 5: Verificar se a mensagem de erro é exibida
cy.get('.alert > :nth-child(2)').should('have.text', 'Email e/ou senha inválidos')

})
// Cenario 3
it('exibir mensagem de erro ao tentar logar com um email vazio se senha valida' , () => {
// Passo 1: Visitar a URL do site
cy.visit('https://front.serverest.dev/login')
// Passo 2: Preencher o campo de senha 
cy.get('[data-testid="senha"]').type('1234')
// Passo 3: Clicar no botão de logar
cy.get('[data-testid="entrar"]').click()
// Passo 4: Verificar se a mensagem de erro é exibida
cy.get('.alert > :nth-child(2)').should('have.text', 'Email é obrigatório')

})

// Cenario 4
  it('exibir mensagem de erro ao tentar logar com um email valido e senha vazia', () => {
    // Passo 1: Visitar a URL do site
    cy.visit('https://front.serverest.dev/login')
    
    // Passo 2: Preencher o campo de email
    cy.get('[data-testid="email"]').type('gabrielteste@qa.com')
    
    // Passo 3: Clicar no botao de logar
    cy.get('[data-testid="entrar"]').click()
//  Passo 4: Verificar se a mensagem da senha obrigatoria é exibida
cy.get('.alert > :nth-child(2)').should('have.text', 'Password é obrigatório')
  }) 
// Cenario 5
it('exibir mensagem de erro ao tentar logar com um email e senha vazios', () => {
// Passo 1: Visitar a URL do site
cy.visit('https://front.serverest.dev/login')
// Passo 2: Clicar no botão de logar
cy.get('[data-testid="entrar"]').click()
// Passo 3: Verificar se a mensagem de erro é exibida
cy.get(':nth-child(3) > :nth-child(2)').should('have.text', 'Email é obrigatório')
cy.get(':nth-child(4) > :nth-child(2)').should('have.text', 'Password é obrigatório')

}) 

})





