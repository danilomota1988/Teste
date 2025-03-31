class LoginPage {
  visitarPagina() {
    cy.visit('https://www.saucedemo.com/')
  }

  verificarLogo() {
    cy.get('.login_logo').should('be.visible')
  }

  digitarUsuario(usuario) {
    cy.get('#user-name').type(usuario)
  }

  digitarSenha(senha) {
    cy.get('#password').type(senha)
  }

  clicarLogin() {
    cy.get('#login-button').click()
  }

  validarLoginSucesso() {
    cy.get('.app_logo').should('be.visible')
  }

  clicarCarrinho() {
    cy.get('#shopping_cart_container').should('be.visible').click()
  }

  validarPaginaCarrinho() {
    cy.get('[data-test="title"]').should('contain', 'Your Cart')
  }
}

export default new LoginPage()
