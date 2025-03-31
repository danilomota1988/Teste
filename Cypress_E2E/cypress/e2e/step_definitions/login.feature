# language: pt

Funcionalidade: Login e Carrinho

  Cenário: Acessar o carrinho após login bem-sucedido
    Dado estou na pagina de Login
    Quando eu digito o login e senha
    E eu tenho sucesso no login
    E eu navego para a pagina meu carrinho de compras
    Então a pagina meu carrinho esta acessivel
