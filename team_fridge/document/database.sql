CREATE DATABASE fridgedb;
USE fridgedb;

CREATE TABLE tbl_fridge(
f_num	INT	PRIMARY KEY AUTO_INCREMENT,
f_photo	VARCHAR(255),
f_name	VARCHAR(10)	NOT NULL,
f_div	VARCHAR(10),
f_memo	VARCHAR(125)	
);

SELECT * FROM tbl_fridge;
DROP TABLE tbl_fridge;

INSERT INTO tbl_fridge(f_photo, f_name, f_div, f_memo) VALUES('',"정연냉장고","cold","냉동고");
