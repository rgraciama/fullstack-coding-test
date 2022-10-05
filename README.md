# Fullstack coding test 

With this challenge we want to see your skills and the quality of the code, we will take into account the use of SOLID principles. You can use all the tools and libraries you want!

## Frontend

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

1. Create a new entity called *CardMetadata* that allows to persist extra information related with the card (author, img source, img format, etc).
2. Add pagination to the endpoint that returns the list of cards.