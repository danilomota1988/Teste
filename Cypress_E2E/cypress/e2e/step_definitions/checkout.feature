# language: pt

Funcionalidade: Finalizar compra no e-commerce

  Cenário: Usuário realiza um checkout completo
    Dado que o usuário está logado
    E adiciona um produto ao carrinho
    Quando acessa o carrinho e inicia o checkout
    E preenche o formulário com dados válidos
    E finaliza a compra
    Então a confirmação de pedido deve ser exibida