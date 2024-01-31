USE fridgeDB;
DROP  TABLE tbl_fridge;
CREATE TABLE tbl_fridge(
f_num	INT		PRIMARY KEY  AUTO_INCREMENT,
f_pnum	VARCHAR(12)		,
f_snum	VARCHAR(125)	,
f_name 	VARCHAR(10)	NOT NULL,
f_div	VARCHAR(10)		,
f_memo	VARCHAR(125)		,
f_photo	VARCHAR(255)		
);
CREATE TABLE tbl_food(
p_num	VARCHAR(12)		PRIMARY KEY,
p_name	VARCHAR(125)	NOT NULL,
p_exdate	VARCHAR(12)	NOT NULL	,
p_quan	INT	NOT NULL	,
p_date	VARCHAR(12)	NOT NULL	
);

INSERT INTO tbl_food
(p_num , p_name , p_exdate, p_quan, p_date)
VALUE ('0001','당근','2024-10-01','3','2024-01-30');


INSERT INTO tbl_food
(p_num , p_name , p_exdate, p_quan, p_date)
VALUE ('0002','도토리','2024-10-01','3','2024-01-30');
INSERT INTO tbl_food
(p_num , p_name , p_exdate, p_quan, p_date)
VALUE ('0003','감자','2024-10-01','3','2024-01-30');

INSERT INTO tbl_food
(p_num , p_name , p_exdate, p_quan, p_date)
VALUE ('0004','사과','2024-10-01','3','2024-01-30');

INSERT INTO tbl_food
(p_num , p_name , p_exdate, p_quan, p_date)
VALUE ('0005','대파','2024-10-01','3','2024-01-30');

INSERT INTO tbl_food
(p_num , p_name , p_exdate, p_quan, p_date)
VALUE ('0006','마늘','2024-10-01','5','2024-01-30');

INSERT INTO tbl_food
(p_num , p_name , p_exdate, p_quan, p_date)
VALUE ('0007','토마토','2024-10-01','50','2024-01-30');

CREATE TABLE tbl_shopping
(s_num	VARCHAR(125)		PRIMARY KEY,
s_name	VARCHAR(125)	NOT NULL	,
s_quan	INT	NOT NULL	
);
SHOW TABLES;
SELECT * FROM tbl_fridge;

-- ALTER TABLE tbl_fridge
-- ADD CONSTRAINT FK_PCODE
-- FOREIGN KEY (f_pnum)
-- REFERENCES tbl_food(p_num);

