import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../../pages/LoginPage'
import ProductPage from '../../pages/ProductPage'
import CartPage from '../../pages/CartPage'
import CheckoutPage from '../../pages/CheckoutPage'

Given('que o usuário está logado', () => {
  LoginPage.visitarPagina()
  LoginPage.digitarUsuario('standard_user')
  LoginPage.digitarSenha('secret_sauce')
  LoginPage.clicarLogin()
})

Given('adiciona um produto ao carrinho', () => {
  ProductPage.adicionarProdutoAoCarrinho('Sauce Labs Backpack')
})

When('acessa o carrinho e inicia o checkout', () => {
  ProductPage.irParaCarrinho()
  CartPage.iniciarCheckout()
})

When('preenche o formulário com dados válidos', () => {
  CheckoutPage.preencherFormularioCheckout('João', 'Silva', '12345')
})

When('finaliza a compra', () => {
  CheckoutPage.finalizarCompra()
})

Then('a confirmação de pedido deve ser exibida', () => {
  CheckoutPage.verificarConfirmacao()
})
