# Fullstack coding test

With this challenge we want to see your skills and the quality of the code, we will take into account the use of SOLID principles. You can use all the tools and libraries you want!

## Frontend

### Required tools

### Required tools

1. [NodeJS 14.18.0](https://github.com/nvm-sh/nvm) You can use nvm to switch easily versions of node.
2. _React_ with _Typescript_ as base framework, _react-router_ to manage the necessary routes (Home, Card detail and New Card) and _styled-components_ to style the components instead of css. These dependencies are already installed in the repo we will provide.

### Objectives

Develop the necessary functionalities for the application to be able to perform the following tasks:

#### Principal

- **Home page** View with a list of all cards from the database with a search/filter input.

1. Top bar with a link logo that goes to the root home page.
2. Each card can be deleted with an "X" button.
3. Te view should be responsive, filling the screen width with the cards one after the other.
4. When you click on a card, you go to the route of **Card detail** page
5. Button "+" to go to **New Card** page

- **Card detail** a view with the specific information of that card.

1. Top bar with a link logo that goes to the root home page.
2. Button to Delete the card and go to home.
3. Button to Edit the fields of the card. When clicked the fields are editable in a different view but same route. You can save and apply changes or cancel.

- **New Card** a view almost the same as when you edit a card..

1. You can save and create the new card or cancel and go back to home.

#### Optional

1. Pagination controls. You will show max 10 cards depending on the page and the search filter.
2. Sidebar with another search filter that shows the first max 10 titles of the card, with a link to that card detail

### Objectives

Develop the necessary functionalities for the application to be able to perform the following requests:

#### Principal

- **GET** http request that returns a list of all cards in the database. This endpoint must has a search input.
- **GET** http request that returns a specific card by their ID.
- **POST** http request that stores a new card in the database.
- **PUT** http request that updates a specific card by their ID.
- **DELETE** http request that deletes a card in the database.

The data processed by these endpoints must be persisted in the database.

#### Optional

1. Create a new entity called _CardMetadata_ that allows to persist extra information related with the card (author, img source, img format, etc).
2. Add pagination to the endpoint that returns the list of cards.

## Backend

### Required tools

1. [Java 11](https://adoptopenjdk.net/)
2. [MySQL](https://dev.mysql.com/downloads/mysql/)

### Objectives

Develop the necessary functionalities for the application to be able to perform the following requests:

#### Principal

- **GET** http request that returns a list of all cards in the database. This endpoint must has a search input.
- **GET** http request that returns a specific card by their ID.
- **POST** http request that stores a new card in the database.
- **PUT** http request that updates a specific card by their ID.
- **DELETE** http request that deletes a card in the database.

The data processed by these endpoints must be persisted in the database.

#### Optional

1. Create a new entity called _CardMetadata_ that allows to persist extra information related with the card (author, img source, img format, etc).
2. Add pagination to the endpoint that returns the list of cards.
