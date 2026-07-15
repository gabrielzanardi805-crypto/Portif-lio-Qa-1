describe('Fluxo de autenticação', () => {
    it('Deve bloquear o login, e exibir mensagem de erro', () => {
        // Passo 1: Acessar a página de cadastro});
        cy.visit('https://front.serverest.dev/login')
        // Passo 2: Digitar o E-mail com o formato inválido
    cy.get('[data-testid="email"]').type('zanardiqa.com.br')
    cy.get('[data-testid="email"]').should('have.value', 'zanardiqa.com.br')
    // Passo 3: Digitar a senha 
    cy.get('[data-testid="senha"]').type(1234)
    cy.get('[data-testid="senha"]').should('have.value', 1234)
    // Passo 4: Clicar no botão de login
    cy.get('[data-testid="entrar"]').click()



    });
 })

