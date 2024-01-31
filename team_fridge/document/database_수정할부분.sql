-- 건드리면 안될것 같아서 수정할 부분 여기에 따로 정리해둡니다.
-- 장바구니 db

CREATE TABLE tbl_shopping
(s_num	VARCHAR(125)		PRIMARY KEY,
s_name	VARCHAR(125)	NOT NULL	,
s_quan	INT	NOT NULL	
);
DROP  TABLE tbl_shopping;


-- ---------------------------------------------------------
-- tbl_shopping 테이블 부분 
-- 따로 고유번호 입력부분이 없어서 이렇게 수정해야합니다.
-- 또한 외래키 설정때문에 tbl_fridge 테이블의 snum 부분도 int 형식으로 변환해주어야합니다.
CREATE TABLE tbl_shopping (
    s_num INT AUTO_INCREMENT PRIMARY KEY,
    s_name VARCHAR(125) NOT NULL,
    s_quan INT NOT NULL
);

-- 외래키 설정
ALTER TABLE tbl_fridge
ADD CONSTRAINT FK_SCODE
FOREIGN KEY (f_snum)
REFERENCES tbl_shopping(s_num);