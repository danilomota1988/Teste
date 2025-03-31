class ProductPage {
    adicionarProdutoAoCarrinho(nomeProduto) {
      cy.contains('.inventory_item', nomeProduto)
        .find('button')
        .click()
    }
  
    irParaCarrinho() {
      cy.get('#shopping_cart_container').click()
    }
  }
  
  export default new ProductPage()
  