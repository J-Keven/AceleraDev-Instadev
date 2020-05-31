# Instadev React SPA

## Objetivo:

O desafio desta semana e da próxima será desenvolver um _SPA (Single Page Application)_ mobile-first do **Instagram** em React, consumindo uma Rest API que deverá cumprir os seguintes critérios:

> - Ser desenvolvido utilizando abordagem funcional e React Hooks para gerenciamento de ciclo de vida e estados.
> - Consumir os dados da Rest API, usando o [Fetch API](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch) do Javascript.
> - Exibir os **posts** de todos os usuários na rota inicial _/_.
> - Exibir todos os **usuários** cadastrados na rota _/users_
> - Exibir o perfil do **usuário** e seus respectivos **posts** na rota _/users/{username}_
> - Exibir os **stories** dos **usuários** na rota inicial _/_.
> - Ao clicar no ícone de **story** do **usuário** deverá abrir seu story com o respectivo vídeo e barra de progresso com a opção de fechar e voltar para o feed (rota inicial).
> - Deve permitir cadastrar um usuário na rota _/newuser_ e exibir uma mensagem de alerta ao enviar.

### Referência em Produção:

[https://vimeo.com/414860405/ad600c6832](https://vimeo.com/414860405/ad600c6832)

### Repositório Base (para fins de estudo):

[https://github.com/codenation-dev/react-instagram](https://github.com/codenation-dev/react-instagram)

### Requisitos

#### Requisitos Parte 1:

- Nesta primeira parte você deverá focar apenas na componentização do projeto seguindo os padrões descritos abaixo na seção _Estrutura de Arquivos e Pastas_.
- Não se preocupe com lógica de estados ou requisições http nesta parte, adicione os dados do usuário _hard-code_.

#### Requisitos Parte 2:

Nesta segunda parte você deverá trazer o que foi implementado na parte 1 e cuidar dos estados dos componentes, das requsições HTTP de cada Rota da aplicação e dos ciclos de vida dos componentes utilizando React Hooks e abordagem funcional, os seguintes requisitos devem ser cumpridos:

> - Ser desenvolvido utilizando abordagem funcional e React Hooks para gerenciamento de ciclo de vida e estados.
> - Consumir os dados da Rest API, usando o [Fetch API](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch) do Javascript.
> - Exibir os **posts** de todos os usuários na rota inicial _/_.
> - Exibir todos os **usuários** cadastrados na rota _/users_
> - Exibir o perfil do **usuário** e seus respectivos **posts** na rota _/users/{username}_
> - Exibir os **stories** dos **usuários** na rota inicial _/_.
> - Ao clicar no ícone de **story** do **usuário** deverá abrir seu story com o respectivo vídeo e barra de progresso com a opção de fechar e voltar para o feed (rota inicial).
> - Deve permitir cadastrar um usuário na rota _/newuser_ e exibir uma mensagem de alerta ao enviar.

### Estrutura de Arquivos e Pastas:

Como já aprendemos em aula, a organização das pastas e arquivos deverá utilizar os seguintes padrões:

- _presentational components_ e _container components_ -> [Referência](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
- _Rails-Style Structure + Module Index_ -> [Referência](https://webcache.googleusercontent.com/search?q=cache:DZ0HZwEl7AUJ:https://www.learnhowtoprogram.com/fidgetech-4-react/4-4-advanced-topics/4-4-3-3-react-and-redux-design-patterns+&cd=1&hl=en&ct=clnk&gl=br)

Seguindo estes dois padrões, a estrutura de arquivos e pastas do seu projeto deverá ficar exatamente assim (dentro de _/src_:

    ├── assets
    │   └── img
    │       ├── instagram-glyph.png
    │       └── instagram-logo.svg
    ├── components
    │   ├── Loading
    │   │   ├── Loading.jsx
    │   │   ├── Loading.scss
    │   │   └── index.jsx
    │   ├── Post
    │   │   ├── Post.jsx
    │   │   ├── Post.scss
    │   │   └── index.jsx
    │   ├── Story
    │   │   ├── Story.jsx
    │   │   ├── Story.scss
    │   │   └── index.jsx
    │   ├── SuccessMessage
    │   │   ├── SuccessMessage.jsx
    │   │   ├── SuccessMessage.scss
    │   │   └── index.jsx
    │   ├── Topbar
    │   │   ├── Topbar.jsx
    │   │   ├── Topbar.scss
    │   │   └── index.jsx
    │   └── User
    │       ├── User.jsx
    │       └── index.jsx
    ├── containers
    │   ├── App
    │   │   ├── App.jsx
    │   │   ├── App.scss
    │   │   └── index.jsx
    │   ├── Posts
    │   │   ├── Posts.jsx
    │   │   └── index.jsx
    │   ├── Stories
    │   │   ├── Stories.jsx
    │   │   ├── Stories.scss
    │   │   └── index.jsx
    │   ├── UserForm
    │   │   ├── UserForm.jsx
    │   │   ├── UserForm.scss
    │   │   └── index.jsx
    │   ├── UserPosts
    │   │   ├── UserPosts.jsx
    │   │   ├── UserPosts.scss
    │   │   └── index.jsx
    │   ├── UserProfile
    │   │   ├── UserProfile.jsx
    │   │   ├── UserProfile.scss
    │   │   └── index.jsx
    │   └── UsersList
    │       ├── UsersList.jsx
    │       ├── UsersList.scss
    │       └── index.jsx
    ├── index.js
    ├── modules
    ├── routes
    │   ├── FeedRoute
    │   │   ├── FeedRoute.jsx
    │   │   ├── FeedRoute.scss
    │   │   └── index.jsx
    │   ├── NewUserRoute
    │   │   ├── NewUserRoute.jsx
    │   │   └── index.jsx
    │   ├── ProfileRoute
    │   │   ├── ProfileRoute.jsx
    │   │   └── index.jsx
    │   ├── UsersRoute
    │   │   ├── UsersRoute.jsx
    │   │   └── index.jsx
    │   └── index.jsx
    ├── serviceWorker.js
    └── setupTests.js

### IMPORTANTE:

Nesta fase você já foi apresentado ao [testing-library](https://testing-library.com/docs/intro) e para que você seja avaliado corretamente ao submeter seu desafio, é necessário que **TODOS** os seus **elementos React**, como _componentes_, _containers_ e _rotas_ possuam o atributo JSX/HTML (sintético) _data-testid="{nome-do-componente}"_:

    ├── components
    │   ├── Loading
    │   │   └── Loading.jsx -> data-testid="loading"
    │   ├── Post
    │   │   └── Post.jsx -> data-testid="post"
    │   ├── Story
    │   │   └── Story.jsx -> data-testid="story"
    │   ├── SuccessMessage
    │   │   └── SuccessMessage.jsx -> data-testid="success-message"
    │   ├── Topbar
    │   │   └── Topbar.jsx -> data-testid="topbar"
    │   └── User
    │       └── User.jsx -> data-testid="user"
    ├── containers
    │   ├── App
    │   │   └── App.jsx -> data-testid="app"
    │   ├── Posts
    │   │   └── Posts.jsx -> data-testid="posts"
    │   ├── Stories
    │   │   └── Stories.jsx -> data-testid="stories"
    │   ├── UserForm
    │   │   └── UserForm.jsx -> data-testid="user-form"
    │   ├── UserPosts
    │   │   └── UserPosts.jsx -> data-testid="user-posts"
    │   ├── UserProfile
    │   │   └── UserProfile.jsx -> data-testid="user-profile"
    │   └── UsersList
    │       └── UsersList.jsx -> data-testid="user-list"
    └── routes
        ├── FeedRoute
        │   └── FeedRoute.jsx -> data-testid="feed-route"
        ├── NewUserRoute
        │   └── NewUserRoute.jsx -> data-testid="new-user-route"
        ├── ProfileRoute
        │   └── ProfileRoute.jsx -> data-testid="profile-route"
        └── UsersRoute
           └── UsersRoute.jsx -> data-testid="users-route"

### Iniciar o projeto:

- Instale as dependências do projeto com o comando _yarn install_ ou _npm install_.
- Inicie o projeto com comando _yarn start_ ou _npm start_ / _npm run start_.

## REST API

### Usuários

| Resource | Method | Endpoint                                                     | Status Code |    Response     |
| :------: | :----: | ------------------------------------------------------------ | :---------: | :-------------: |
|  Users   |  GET   | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users     |     200     | Array of Object |
|   User   |  GET   | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id |     200     |     Object      |
|   User   |  POST  | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users     |     201     | Created object  |
|   User   |  PUT   | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id |     200     | Updated object  |
|   User   | DELETE | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id |     200     | Deleted object  |

> Body (POST / PUT):

    {
        "name": "string",
        "avatar": "string",
        "username": "string",
        "email": "string"
    }

### Stories

| Resource | Method | Endpoint                                                       | Status Code |    Response     |
| :------: | :----: | -------------------------------------------------------------- | :---------: | :-------------: |
| stories  |  GET   | https://5e7d0266a917d70016684219.mockapi.io/api/v1/stories     |     200     | Array of Object |
|  story   |  GET   | https://5e7d0266a917d70016684219.mockapi.io/api/v1/stories/:id |     200     |     Object      |

### Posts

| Resource | Method | Endpoint                                                               | Status Code | Response        |
| :------: | :----: | ---------------------------------------------------------------------- | ----------- | --------------- |
|  Posts   |  GET   | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts     | 200         | Array of Object |
|   Post   |  GET   | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts/:id | 200         | Object          |
|   Post   |  POST  | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts     | 201         | Created object  |
|   Post   |  PUT   | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts/:id | 200         | Updated object  |
|   Post   | DELETE | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts/:id | 200         | Deleted object  |

> Body (POST / PUT):

    {
        "userId": "string",
        "imageUrl": "string"
    }

### Comentários

| Resource | Method | Endpoint                                                                            | Status Code | Response        |
| :------: | :----: | ----------------------------------------------------------------------------------- | ----------- | --------------- |
| Comments |  GET   | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts/:id/comments     | 200         | Array of Object |
| Comment  |  GET   | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts/:id/comments/:id | 200         | Object          |
| Comment  |  POST  | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts/:id/comments     | 201         | Created object  |
| Comment  |  PUT   | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts/:id/comments/:id | 200         | Updated object  |
| Comment  | DELETE | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts/:id/comments/:id | 200         | Deleted object  |

> Body (POST / PUT):

    {
        "postId": "string",
        "comment": "string",
        "avatar": "string",
        "name": "string"
    }

### Query Params

> Adicione os seguintes **queries** às requisições _GET_:
>
> #### Paginação
>
> _?page=1&limit=10_ ou _?p=1&l=10_
>
> #### Ordenação
>
> _?sortBy=createdAt&order=desc_
> também é possível utilizar _sortby_, _orderBy_, ou _orderby_
> OBS: se você omitir o parâmetro _order_, a ordenação padrão será 'asc'
>
> #### Busca
>
> _?search=blog1_ ou _?filter=blog1_

### Códigos de erro e mensagens de retorno

- _200_ - OK
- _201_ - OK
- _404_ - Not found
- _500_ - Server error

## Tópicos:

Neste desafio você vai praticar os seus conhecimentos em:

- **Fetch API**
- **JS Funcional:**
- **Modularização**
- **Presentational e Container Components**
- **Rails-Style Structure + Module Index**
- **React Hooks** _useState_, _useEffect_
- **React Testing Library**
- **React**

## Requisitos:

- **[Node v13.8.0](https://nodejs.org/en/)** - ou superior, instalado em seu computador.
- **[Create React App](https://github.com/facebook/create-react-app)**
