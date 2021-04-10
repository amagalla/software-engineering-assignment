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

/*

INSERT INTO registration (firstname, lastname, address1, address2, city, state, zip, country)
VALUES ('Anthony', 'Magallanes', '38888 TEST ADDRESS', '38888 TEST2 ADRESS2', 'San Francisco', 'CA', '987657856', 'US')

*/
