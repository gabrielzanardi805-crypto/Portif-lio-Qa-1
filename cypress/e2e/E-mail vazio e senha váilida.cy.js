describe('Fluxo de autenticação', () => {
    it('Deve bloquear o login, e exibir mensagem de erro', () => {
        // Passo 1: Acessar a página de cadastro});
        cy.visit('https://front.serverest.dev/login')
        // Passo 2: Preencher apenas o campo da senha
        cy.get('[data-testid="senha"]').type('1234')
        cy.get('[data-testid="senha"]').should('have.value', '1234')
        // Passo 3: Clicar no botão de entrar
   cy.get('[data-testid="entrar"]').click()
});
})
