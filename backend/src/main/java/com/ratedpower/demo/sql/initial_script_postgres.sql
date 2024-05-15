CREATE TABLE product
(
    id          SERIAL PRIMARY KEY,
    title       VARCHAR(255),
    description VARCHAR(255),
    image_url   VARCHAR(255) DEFAULT 'https://placeimg.com/640/480/any',
    created_at  DATE,
    updated_at  DATE
);

CREATE TABLE card {
    id          SERIAL PRIMARY KEY,


}
