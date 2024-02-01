CREATE DATABASE fridgedb;
USE fridgedb;

CREATE TABLE tbl_user(
    ps_name VARCHAR(35) NOT NULL,
    ps_id VARCHAR(35) PRIMARY KEY,
    ps_pw VARCHAR(35) NOT NULL
);

INSERT INTO tbl_user(ps_name, ps_id, ps_pw) VALUES('운영자', 'fridge', 'fridge');

DROP TABLE tbl_user;