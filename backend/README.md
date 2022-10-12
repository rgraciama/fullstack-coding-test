# MyCodingTestRatedPower (Springboot backend)

This is an API Rest to manage Products CRUD, made using Springboot.

The DB is on MySQL ver. 8.0.30 and the application is typed/compiled in Java 11.

In order to build the project you must run the script:

```
create table product
(
    id          int auto_increment primary key,
    title       varchar(255)                                            null,
    description varchar(255)                                            null,
    image_url   varchar(255) default 'https://placeimg.com/640/480/any' null,
    created_at  date                                                    null,
    updated_at  date                                                    null
);
```

And launch the main DemoApplication program.

I added Swagger documentation. You can reach it on http://localhost:8443/swagger-ui/index.html

![image](https://user-images.githubusercontent.com/1705227/195431739-9e22962a-8f55-46b8-b714-485cf641882f.png)

The data is created/updated/readed/deleted using the frontend_angular project https://github.com/rgraciama/fullstack-coding-test/tree/main/frontend_angular

![image](https://user-images.githubusercontent.com/1705227/195431846-ae9a9125-588c-48a7-95d7-5dac850f948d.png)

