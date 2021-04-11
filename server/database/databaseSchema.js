/*
    CREATE TABLE registration (
        userid SERIAL PRIMARY KEY,
        firstname varchar(50) NOT NULL,
        lastname varchar(50) NOT NULL,
        address1 varchar(50) NOT NULL,
        address2 varchar(50),
        city varchar(50) NOT NULL,
        state varchar(50) NOT NULL,
        zip varchar(9) NOT NULL,
        country varchar(3) NOT NULL,
        date DATE not null default CURRENT_DATE
    )
*/
