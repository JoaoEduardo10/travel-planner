# TRAVEL PLANNER (PLANEJADOR DE VIAGENS)

## Funcionalidades

- [x] Faz um plano de viagem completo para o usuário, incluindo informações sobre a taxa de criminalidade, a melhor forma de viajar, a previsão do clima e um itinerário detalhado para cada dia da viagem.

## Sobre

O projeto foi concebido para facilitar o planejamento de viagens, tornando-o prático e fácil de testar possíveis erros em todo o servidor. Buscamos priorizar a reutilização de código e adotar os princípios SOLID sempre que possível. Se você quiser saber mais sobre a API, criamos uma documentação completa utilizando o Swagger, onde todas as rotas são detalhadamente explicadas. O que torna tudo ainda mais interessante é que todas essas funcionalidades são executadas pelo ChatGPT.

OBS: Este Projeto contem variavel de ambiente adicione elas antes de começar o usar o projeto

- PORT=3333
- OPENAI_API_KEY=https://openai.com/

## Architecture

### dataBase

- Responsável pela conexão com a OpenAI e gerenciamento dos dados.

### Server

- Contém todo o código relacionado ao servidor da aplicação.

### services

- Responsável por conter todas as regras de negócio da aplicação.

### src/index

- Responsável por iniciar o servidor.

### repository

- Responsável por agregar as regras de negócio da aplicação.

### controller

- Responsável por receber a resposta do repositório e retornar um status e um corpo de resposta.

### useCase

Combina o repositório com o controlador para retornar a resposta ao servidor.

### middlewares

- Atua como mediador entre as requisições, além de armazenar o middleware global responsável por tratar erros da aplicação.

### router

- Contém todas as rotas da aplicação.

### interface

- Onde fica as tipagens de Negocio da aplicaçao os DTO

### test

- Local onde todos os testes da aplicação são realizados.

Essa arquitetura bem organizada facilita a compreensão e manutenção do projeto, separando as responsabilidades em diferentes camadas para um desenvolvimento mais estruturado e escalável.

## Tecnologias utilizadas

1. [typescript](https://www.typescriptlang.org/)

2. [express](https://expressjs.com/pt-br/)

3. [express-async-errors](https://www.npmjs.com/package/express-async-errors)

4. [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)

5. [jest](https://jestjs.io/pt-BR/)

6. [supertest](https://www.npmjs.com/package/supertest)

7. [eslint](https://eslint.org/)

8. [chatGPT](https://platform.openai.com/docs/introduction)

9. [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)

10. [cors](https://www.npmjs.com/package/cors)

## Como rodar o projeto

OBS: Este Projeto contem variavel de ambiente adicione elas antes de começar o usar o projeto

- PORT=3333
- OPENAI_API_KEY=https://openai.com/

```bash
# instale as dependencias
$ npm install ou yarn

# caso querira iniciar a aplicação e desenvolvimento
$ npm run dev ou yarn dev

# para gera um build do projeto
$ npm run build ou yarn build

# caso querira iniciar a aplicação para produção siga essas etapas:
$ npm run start ou yarn start

# Que ver a documentação do projeto com swagger?
$ npm run dev ou yarn dev
# cole este link no navegador:
http://localhost:<PORT>/travel-planner/documentation/
# no lugar <PORT> coloque a porta que voçê escolheu no .env
```
