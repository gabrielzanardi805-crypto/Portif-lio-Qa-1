describe('Fluxo de autenticação', () => {
    it('Deve bloquear o login, e exibir mensagem de erro', () => {
cy.visit('https://front.serverest.dev/login')
        // Passo 2: Preencher apenas o campo do e-mail
        cy.get('[data-testid="email"]').type('zanardi18@qa.com')
        cy.get('[data-testid="email"]').should('have.value', 'zanardi18@qa.com')
       // Passo 3: Não digitar a senha
       cy.get('[data-testid="senha"]').clear()
        cy.get('[data-testid="senha"]').should('have.value', '')
        // Passo 4: Clicar no botão de entrar
        cy.get('[data-testid="entrar"]').click()
        cy.get('.alert > :nth-child(2)').should('contain.text', 'Password é obrigatório')
})
})