// cypress/e2e/step_definitions/Login/login.js
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../../pages/LoginPage'

Given("estou na pagina de Login", () => {
  LoginPage.visitarPagina()
  LoginPage.verificarLogo()
})

When("eu digito o login e senha", () => {
  LoginPage.digitarUsuario('standard_user')
  LoginPage.digitarSenha('secret_sauce')
  LoginPage.clicarLogin()
})

When("eu tenho sucesso no login", () => {
  LoginPage.validarLoginSucesso()
})

When("eu navego para a pagina meu carrinho de compras", () => {
  LoginPage.clicarCarrinho()
})

Then("a pagina meu carrinho esta acessivel", () => {
  LoginPage.validarPaginaCarrinho()
})
