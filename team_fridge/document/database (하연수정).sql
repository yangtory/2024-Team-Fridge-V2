DROP DATABASE fridgeDB;
CREATE DATABASE fridgeDB;
USE fridgeDB;

CREATE TABLE tbl_fridge(
f_seq	INT	AUTO_INCREMENT	PRIMARY KEY,
f_name	VARCHAR(10)	NOT NULL	,
f_div	VARCHAR(4)		,
f_memo	VARCHAR(125)	,	
f_photo	VARCHAR(255)	,	
f_image_name	VARCHAR(255),		
f_image_origin_name	VARCHAR(255)			
);

-- 유통기한이랑, 구매날짜 notnull삭제(2/8 3시40분쯤수정)
CREATE TABLE tbl_product(
p_seq	INT	AUTO_INCREMENT	PRIMARY KEY,
p_fseq	INT	NOT NULL	,
p_name	VARCHAR(125)	NOT NULL	,
p_exdate	VARCHAR(12)	,
p_quan	INT	NOT NULL	,
p_date	VARCHAR(12)	,
p_memo	VARCHAR(125)			
);

-- 유통기한이랑, 구매날짜 notnull삭제(2/8 3시40분쯤수정)
CREATE TABLE tbl_shopping (
s_seq	INT	AUTO_INCREMENT	PRIMARY KEY,
s_name	VARCHAR(125)	NOT NULL	,
s_quan	INT	NOT NULL	,
s_ox	INT	,
s_fseq	INT	NOT NULL	,
);

CREATE TABLE tbl_user(
u_id	VARCHAR(35)		PRIMARY KEY,
u_pw	VARCHAR(255)	NOT NULL	,
u_name	VARCHAR(35)	NOT NULL	,
u_role	VARCHAR(35)	NOT NULL	
);

DROP TABLE tbl_user;

-- 외래키 설정
ALTER TABLE tbl_product
ADD CONSTRAINT FK_PSEQ
FOREIGN KEY (p_fseq)
REFERENCES tbl_fridge(f_seq);


-- ps_role 추가
INSERT INTO tbl_user(u_name, u_id, u_pw , u_role) VALUES('운영자', 'fridge', 'fridge','USER');


-- 임시 데이터
INSERT INTO tbl_product
(p_seq , p_name , p_exdate, p_quan, p_date, p_memo)
VALUE ('0001','당근','2024-10-01','3','2024-01-30', '당근임');


INSERT INTO tbl_product
(p_seq , p_name , p_exdate, p_quan, p_date, p_memo)
VALUE ('0002','도토리','2024-10-01','3','2024-01-30', '도토리임');
INSERT INTO tbl_product
(p_seq , p_name , p_exdate, p_quan, p_date, p_memo)
VALUE ('0003','감자','2024-10-01','3','2024-01-30', '감자임');

INSERT INTO tbl_product
(p_seq , p_name , p_exdate, p_quan, p_date, p_memo)
VALUE ('0004','사과','2024-10-01','3','2024-01-30', '사과임');

INSERT INTO tbl_product
(p_seq , p_name , p_exdate, p_quan, p_date, p_memo)
VALUE ('0005','대파','2024-10-01','3','2024-01-30', '대파임');

INSERT INTO tbl_product
(p_seq , p_name , p_exdate, p_quan, p_date, p_memo)
VALUE ('0006','마늘','2024-10-01','5','2024-01-30', '마늘임');

INSERT INTO tbl_product
(p_seq , p_name , p_exdate, p_quan, p_date, p_memo)
VALUE ('0007','토마토','2024-10-01','50','2024-01-30', '토마토임');

INSERT INTO tbl_product
(p_fseq, p_name , p_exdate, p_quan, p_date, p_memo)
VALUE ('2','포도','2024-10-01','50','2024-01-30', '커피임');

SELECT f_seq as 냉장고번호, f_name as 냉장고이름,
p_fseq as 냉장고번호,p_seq as 음식번호, p_name as 음식이름,
p_quan as 수량,p_date as 구매날짜, p_exdate as 소비기한
FROM tbl_product
LEFT JOIN tbl_fridge
ON f_seq = p_seq;

CREATE VIEW view_plist AS
(
SELECT f_seq, p_name, p_seq, p_fseq
FROM tbl_product
	LEFT JOIN tbl_fridge
		ON f_seq = p_fseq
ORDER BY f_seq
);



SELECT * FROM tbl_product;
