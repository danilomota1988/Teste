# 🧪 Projeto de Testes E2E com Cypress + Cucumber

Automação de testes End-to-End (E2E) para um e-commerce de exemplo, utilizando **Cypress**, **Cucumber (Gherkin)** e o padrão de projeto **Page Object**. O objetivo é garantir a qualidade do fluxo de login e finalização de compra de forma confiável, legível e com boas práticas.

---

## 📌 Visão Geral

- ✅ Testes de login com validações de redirecionamento
- 🛒 Testes de checkout incluindo seleção de produto, adição ao carrinho e finalização
- 🧱 Arquitetura modular com Page Object Pattern
- 📘 Escrita de testes em Gherkin para colaboração com não-devs
- 📊 Geração de relatórios HTML com Mochawesome
- 🔄 Integração com CI/CD (exemplo com GitHub Actions)

---

## 🚧 Motivação

Este projeto visa simular um fluxo de testes reais em um e-commerce, integrando **tecnologias modernas** com **estratégias de automação de qualidade**, garantindo:

- Escalabilidade e manutenção do código
- Facilidade de entendimento para devs e QA
- Geração de relatórios legíveis e completos
- Execução automatizada em pipelines CI/CD

---

## 📁 Estrutura do Projeto

cypress/ └── e2e/ ├── pages/
│ ├── LoginPage.js
│ ├── ProductPage.js
│ ├── CartPage.js
│ └── CheckoutPage.js
├── step_definitions/
│ ├── Login/ │ │ └── login.js
│ └── Checkout/ │ └── checkout.js
├── login.feature
└── checkout.feature


---

## ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org/) v16+
- npm (gerenciador de pacotes)
- Git

---

## 🚀 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/meu-projeto-cypress.git
cd meu-projeto-cypress
npm init -y
npm install --save-dev cypress@^14.2.1
npm install --save-dev cypress-cucumber-preprocessor@^4.3.1
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator

Rode os testes
GUI: npm run test
Headless: npm run cy:run
Com relatório: npm run test:report


