class CartPage {
    iniciarCheckout() {
      cy.get('[data-test="checkout"]').click()
    }
  }
  
  export default new CartPage()
  