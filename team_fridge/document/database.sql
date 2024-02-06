DROP DATABASE fridgeDB;
CREATE DATABASE fridgeDB;
USE fridgeDB;

CREATE TABLE tbl_fridge(
f_seq	INT		PRIMARY KEY AUTO_INCREMENT,
f_pseq	INT		,
f_sseq	INT	,	
f_name	VARCHAR(10)	NOT NULL	,
f_div	VARCHAR(4)		,
f_memo	VARCHAR(125)	,	
f_photo	VARCHAR(255)		
);

CREATE TABLE tbl_product(
p_seq	INT	AUTO_INCREMENT	PRIMARY KEY,
p_name	VARCHAR(125)	NOT NULL,	
p_exdate	VARCHAR(12)	NOT NULL	,
p_quan	INT	NOT NULL	,
p_date	VARCHAR(12)	NOT NULL		
);

CREATE TABLE tbl_shopping (
s_seq	INT	AUTO_INCREMENT	PRIMARY KEY,
s_name	VARCHAR(125)	NOT NULL	,
s_quan	INT	NOT NULL	
);

CREATE TABLE tbl_templist(
    t_num INT AUTO_INCREMENT PRIMARY KEY,
	t_name VARCHAR(125) NOT NULL,
    t_quan INT NOT NULL
);

CREATE TABLE tbl_user(
u_id	VARCHAR(35)		PRIMARY KEY,
u_pw	VARCHAR(255)	NOT NULL	,
u_name	VARCHAR(35)	NOT NULL	,
u_role	VARCHAR(35)	NOT NULL	
);

DROP TABLE tbl_user;

-- 외래키 설정
ALTER TABLE tbl_fridge
ADD CONSTRAINT FK_SSEQ
FOREIGN KEY (f_sseq)
REFERENCES tbl_shopping(s_seq);

ALTER TABLE tbl_fridge
ADD CONSTRAINT FK_PSEQ
FOREIGN KEY (f_pseq)
REFERENCES tbl_product(p_seq);


-- ps_role 추가
INSERT INTO tbl_user(u_name, u_id, u_pw , u_role) VALUES('운영자', 'fridge', 'fridge','USER');


-- 임시 데이터
INSERT INTO tbl_product
(p_seq , p_name , p_exdate, p_quan, p_date)
VALUE ('0001','당근','2024-10-01','3','2024-01-30');


INSERT INTO tbl_product
(p_seq , p_name , p_exdate, p_quan, p_date)
VALUE ('0002','도토리','2024-10-01','3','2024-01-30');
INSERT INTO tbl_product
(p_seq , p_name , p_exdate, p_quan, p_date)
VALUE ('0003','감자','2024-10-01','3','2024-01-30');

INSERT INTO tbl_product
(p_seq , p_name , p_exdate, p_quan, p_date)
VALUE ('0004','사과','2024-10-01','3','2024-01-30');

INSERT INTO tbl_product
(p_seq , p_name , p_exdate, p_quan, p_date)
VALUE ('0005','대파','2024-10-01','3','2024-01-30');

INSERT INTO tbl_product
(p_seq , p_name , p_exdate, p_quan, p_date)
VALUE ('0006','마늘','2024-10-01','5','2024-01-30');

INSERT INTO tbl_product
(p_seq , p_name , p_exdate, p_quan, p_date)
VALUE ('0007','토마토','2024-10-01','50','2024-01-30');