<h1 align="center">
  <img alt="pebmed logo" src="https://pebmed.com.br/wp-content/themes/Pebmed-Theme/sahifa/images/logo-pebmed.png" width="224px"/><br/>
  Desafio PEBMED: Checkout
</h1>
<p align="center">
  Este projeto tem por finalidade a execução de tarefas presentes no desafio PEBMED, sendo a criação de telas pré definidas, simulando um fluxo simples de <i>checkout</i>.
</p>

<p align="center"><a href="https://pkg.go.dev/github.com/create-go-app/cli/v3?tab=doc" 
target="_blank"><img src="https://img.shields.io/badge/Vite-%5E4.1.0-00ADD1?style=for-the-badge&logo=vite" alt="vite version" /></a>&nbsp;<a href="https://vitejs.dev/guide/" target="_blank"><img src="https://img.shields.io/badge/Jest_Cover-73.0%25-success?style=for-the-badge&logo=none" alt="jest cover" /></a>&nbsp;<a href="https://goreportcard.com/report/github.com/create-go-app/cli" target="_blank"></a>&nbsp;</p>

## Autor
- [GitHub](https://github.com/luisdourado33)
- [LinkedIn](https://linkedin.com/in/luisdourado33)

## ⚡️ Quick start

Para executar este projeto, é necessário que haja o [Node](https://nodejs.dev/en/) e [Git](https://git-scm.com/) instalados na máquina.

> A instalação do projeto é rápida, necessário somente realizar a cópia do projeto e instalar através de um gerenciador de pacotes (npm/yarn). Explicaremos essas etapas à seguir.

Após a instalação do Node e Git, podemos clonar o projeto através de um terminal de linha de comando, através do seguinte comando:

```bash
git clone git@github.com:luisdourado33/checkout-app.git
```

Após clonar o projeto, é preciso instalar os pacotes necessários para sua execução:

```bash
# Acessar diretório:
cd checkout-app

# Instalação dos pacotes:
npm install
```

Agora, é necessário criar o arquivo de configuração de variáveis de ambiente. Crie um arquivo `.env` na raíz do projeto, através do comando:

```bash
touch .env
```

O projeto utiliza somente 1 variável de ambiente, `VITE_API_BASE_URL` na qual aponta para a base da API utilizada pela aplicação.

```env
VITE_API_BASE_URL = https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com
```

Feito! O projeto está pronto para ser executado.

```bash
npm run dev
```

Por se tratar do Vite, a porta padrão para execução de projeto é a `5173`, podendo ser acessada através do `http://localhost:5173`.

## 📖 Sobre

O projeto contém implementações das quais foram baseadas em design patterns conhecidos, tais como **Atomic Design**, **Singleton**, entre outros. Todo as implementações realizadas podem ser encontradas no diretório raíz `(/src)`.

## ⚙️ Testes e cobertura

Foram implementados testes unitários e de integração, facilitando a visualização do comportamento das funções auxiliares utilizadas durante o desenvolvimento, todas elas localizadas na pasta `/test`.

### `Definições dos testes implementados`

| Tipo | Description                                              |
|--------|----------------------------------------------------------|
| `Unitário`   | Utilizado nos testes de funções `masks` e `validators` utilizadas no formulário principal | `bool` | 
| `Integração`   | Utilizado nos testes de integração com a API principal, responsável pela lista de planos e subscrições | `bool` | 


## Execução de testes
Para testes SEM cobertura:
```base
npm run test
```

Para testes COM cobertura:
```base
npm run test:coverage
```

## 📝 Bibliotecas utilizadas e suas finalidades

- Gerenciamento de formulários:
  - `react-hook-form` 
  - `yup`
  - `vanilla-ts`
- Qualidade de código
  - `husky` — gerenciamento de pré-commits.
  - `lint-staged`
  - `eslint`
- Gerenciamento de estados globais:
  - `redux`
  - `redux-toolkit`
- Pré-processadores:
  - `styled-components`
- Chamadas HTTP:
  - `node:fetch`
- Testes unitários/integração:
  - `jest`
  - `@testing-library/jest-dom`

## 🚚 Deploy

> O deploy da aplicação foi feito através da Vercel pela boa integração com Vite + ReactTS.

### Vercel
  - `prod` — [Ambiente de produção](https://checkout-app-delta.vercel.app/)
  - `dev` - [Ambiente de desenvolvimento](https://vercel.com/luisdourado33/checkout-app/7bywGTviGgRAFiE9B1YRFc61Lumb)

## ⚠️ Licença

Sinta-se à vontade para utilizar do código para quaisquer fins. Todo PR será bem vindo :).