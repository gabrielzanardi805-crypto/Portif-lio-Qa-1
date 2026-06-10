describe('Fluxo de cadastro', () => {
    it('Deve bloquear o cadastro, pois já está em uso', () => {
        // Passo 1: Acessar a página de cadastro
        cy.visit('https://front.serverest.dev/cadastrarusuarios');
        // Passo 2: Preencher os campos de cadastro
        cy.get('[data-testid="nome"]').type('gabriel')
        cy.get('[data-testid="nome"]').should('have.value', 'gabriel')
        cy.get('[data-testid="email"]').type('teste@teste.com')
        cy.get('[data-testid="email"]').should('have.value', 'teste@teste.com')
        cy.get('[data-testid="password"]').type('teste123')
        cy.get('[data-testid="password"]').should('have.value', 'teste123')
        // Passo 3: clicar no botão cadastrar
        cy.get('[data-testid="cadastrar"]').click()
        // Passo 4: Verificar se o cadastro foi realizado com sucesso
       cy.get('.alert > :nth-child(2)').should('have.text', 'Este email já está sendo usado')
      

       
    });
});