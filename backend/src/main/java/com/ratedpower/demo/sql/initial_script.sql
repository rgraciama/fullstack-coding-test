create table product
(
    id          int auto_increment primary key,
    title       varchar(255)                                            null,
    description varchar(255)                                            null,
    image_url   varchar(255) default 'https://placeimg.com/640/480/any' null,
    created_at  date                                                    null,
    updated_at  date                                                    null
);
