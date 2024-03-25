-- 주문서 데이터 정규화
CREATE DATABASE orderDB;
USE orderDB;

CREATE TABLE tbl_tmp_order(
o_num	VARCHAR(6),
o_date	VARCHAR(10),
o_ccode	VARCHAR(5),
o_cname	VARCHAR(20),
o_tel	VARCHAR(20),
o_pcode1	VARCHAR(6),
o_pcode2	VARCHAR(6),
o_pcode3	VARCHAR(6)
);

SELECT COUNT(*) FROM tbl_tmp_order;

-- 주문-고객 Relation 생성
SELECT o_num, o_ccode FROM tbl_tmp_order;

-- WHERE o_pcode1 <> '' 
-- 이 값이 공백이 아니면
-- 주문-상품 Relation 생성
SELECT * FROM
(
SELECT o_num, o_pcode1 AS 상품코드 FROM tbl_tmp_order
UNION
SELECT o_num, o_pcode2 AS 상품코드 FROM tbl_tmp_order
UNION
SELECT o_num, o_pcode3 AS 상품코드 FROM tbl_tmp_order
) AS M WHERE M.상품코드 <> ''
ORDER BY o_num;

-- 생성한 Relation 데이터를 저장할 Relation Table 생성
CREATE TABLE tbl_order_customer(
oc_onum	VARCHAR(6)	NOT NULL,
oc_ccode	VARCHAR(5)	NOT NULL,
PRIMARY KEY(oc_onum,oc_ccode)	
);

CREATE TABLE tbl_order_product(
op_onum	VARCHAR(6)	NOT NULL,
op_pcode	VARCHAR(6)	NOT NULL,
PRIMARY KEY(op_onum, op_pcode)
);

CREATE TABLE tbl_orders(
o_num	VARCHAR(6)	PRIMARY KEY,
o_date	VARCHAR(10)	NOT NULL	
);

-- 주문원장, 주문-고객, 주문-상품 의 참조관계 설정하기
-- 참조관계(FK) 설정이 될 수 있는지 유효성 검사 수행
/*
주문원장 : 주문-고객 테이블의 관계는 1:N 의 관계이다
주문원장은 Master Table 이며, 주문-고객은 Relation Table 이다
주문원장에 있는 코드는 주문-고객에 있을수도 있다 : 0..N
만약 주문-고객에 코드가 있는데 주문원장에 없다 : 있을 수 없다
주문-고객을 기준으로 주문번호가 주문원장에 있는지 확인하기
*/

-- 다음 SQL 결과에서 데이터가 나오면 FK 설정이 불가능하다
SELECT * 
	FROM tbl_order_customer C
		LEFT JOIN tbl_orders O
			ON C.oc_onum = O.o_num
WHERE O.o_num IS NULL;
            
SELECT * 
	FROM tbl_order_product P
		LEFT JOIN tbl_orders O
			ON P.op_onum = O.o_num
WHERE O.o_num IS NULL;

-- 3개의 Table 간의 참조무결성을 확인했으므로 FK 설정이 가능하다
-- 주문원장, 주문-고객 간의 FK 설정
-- CONSTRAINT 이름(fk_oc) 를 지정하는 위치 주의!!
ALTER TABLE tbl_order_customer
ADD CONSTRAINT fk_oc FOREIGN KEY 여기아님(oc_onum) -- fk_oc 라는 이름으로 FK 설정하겟음
REFERENCES tbl_orders(o_num);

ALTER TABLE tbl_order_product
ADD CONSTRAINT fk_opo FOREIGN KEY(op_onum) 
REFERENCES tbl_orders(o_num);

-- FK 삭제하기
ALTER TABLE tbl_order_customer
DROP CONSTRAINT tbl_order_customer_ibfk_1;

-- 고객정보, 상품정보 테이블 생성, 데이터 import
CREATE TABLE tbl_customer(
c_code	VARCHAR(5)	PRIMARY KEY,
c_name	VARCHAR(25)	NOT NULL,
c_tel	VARCHAR(15)	NOT NULL	
);

CREATE TABLE tbl_product(
p_code	VARCHAR(6)	PRIMARY KEY,
p_name	VARCHAR(25)	NOT NULL,
p_item	VARCHAR(25)	NOT NULL,
p_price	INT	NOT NULL
);

/*
Table 관계설정
	상품정보, 주문-상품
	고객정보, 주문-고객
*/
-- 각 테이블간의 무결성 검증
-- 1:N 의 테이블에서 
-- N 테이블(FROM)에 있는 코드가 1 테이블(LEFT)에 있는지 확인

-- 주문-상품 테이블에는 있는 상품코드가
-- 상품정보 테이블에 없는 것이 있는가 검사
-- 여기에서 NULL 데이터가 있으면 안됨
SELECT * 
	FROM tbl_order_product O
		LEFT JOIN tbl_product P
			ON P.p_code = O.op_pcode
WHERE P.p_code IS NULL;

SELECT * 
	FROM tbl_order_customer O
		LEFT JOIN tbl_customer C
			ON C.c_code = O.oc_ccode
WHERE C.c_code IS NULL;

-- 테이블간에 FK 설정하기
-- 주문-상품과 상품정보
-- 주문-고객과 고객정보
ALTER TABLE tbl_order_product
ADD CONSTRAINT fk_p FOREIGN KEY(op_pcode)
REFERENCES tbl_product(p_code);

ALTER TABLE tbl_order_customer
ADD CONSTRAINT fk_c FOREIGN KEY(oc_ccode)
REFERENCES tbl_customer(c_code);

/* 주문원장, 주문-상품, 주문-고객, 상품정보, 고객정보 의 형식으로 
각 테이블을 분리하고 Relation 을 설정했다 
여기까지 제 3정규화 또는 BCNF(보이스코드) 정규화 까지 완성되었다
하지만 실제 사용하려고 하면 다중의 Talbe 이 서로 JOIN 되어야 하는
불편함이 발생했다

이런 상황이 되면, Table 을 다수로 쪼개는 것이 꼭 좋은 상황인지 살펴보고,
Table 간에 통합을 하여 Table 의 개수를 줄이는 것을 고민해야 한다.
이처럼 분리된 테이블을 다시 통합 하는 것을 제 4정규화, 제 5정규화 과정이라고 한다.

tbl_order_product, tbl_order_customer Relation 을 제거하고
주문원장과 고객정보, 주문원장과 상품정보를 연결할 수 있는 방법을 모색한다.

1. 한 개의 주문에는 반드시 고객은 1명 뿐이다.
2. 한 개의 주문에는 여러개의 상품이 포함될 수 있다.
	단, 한 개의 주문에 같은 상품이 중복될 수 없다.
*/
-- 기존의 Relation(FK) 를 제거
ALTER TABLE tbl_order_customer
DROP CONSTRAINT fk_c;

ALTER TABLE tbl_order_customer
DROP CONSTRAINT fk_oc;

ALTER TABLE tbl_order_product
DROP CONSTRAINT fk_p;

ALTER TABLE tbl_order_product
DROP CONSTRAINT fk_opo;

-- 주문원장에 다시 고객코드와 상품코드를 
/*
주문원장에 고객코드와 상품코드를 추가하는 통합을 하려 했더니
고객은 한 주문에 한 명의 고객만 포함되는 원칙이 있어 문제가 없으나,
상품은 한 주문에 다수의 상품이 포함되는 원칙이 있다.
이럴 때 어떻게 주문원장을 처리할 것인가?
이러한 상황이 되면 tbl_order_product Relation 은 그대로 유지하는 것이 좋다.
*/
-- 주문-상품과 상품정보, 주문-상품과 주문정보 Relation(FK)는 그대로 유지(복원)하자
ALTER TABLE tbl_order_product
ADD CONSTRAINT fk_p FOREIGN KEY(op_pcode)
REFERENCES tbl_product(p_code);

ALTER TABLE tbl_order_product
ADD CONSTRAINT fk_op FOREIGN KEY(op_onum) 
REFERENCES tbl_orders(o_num);

-- 주문원장, 고객코드를 연결하기 위한 조치
-- 주문원장에 고객코드 칼럼이 없는 상태
/* 
1. 주문원장에 고객코드 칼럼을 추가하고
2. 주문- 고객 Relation Table  을 참조하여
	주문번호에 맞는 고객코드를 주문원장 Table 에 Update
*/

-- 1. 주문원장 고객코드 칼럼 추가하기
-- 이미 주문원장과 주문-고객 테이블에 데이터가 많이 있는 상태일 때
ALTER TABLE tbl_orders
ADD COLUMN o_ccode VARCHAR(5);

/*
Sub Query 를 이용한 다른 Table 에서 데이터를 조회하여
다수 Update 를 실행하는 것
1. UPDATE tbl_orders 명령이 Sub Query 가 있음을 알게되면
2. SELECT * FROM tbl_orders 명령을 자체적으로 실행한다.
3. 이 결과는 List type 의 데이터가 되고
4. 자체적으로 forEach() 문이 실행된다.
5. tbl_orderlist.forEach(item) 처럼 작동된다.
6. item 값을 Sub Query(...) 로 내려 보낸다.
7. SELECT * FROM tbl_order_customer
	WHERE item.o_num 과 같은 내부 Query 가 실행된다.
8. 결과값으로 oc_code 값을 return 한다.
9. SET o_ccode = return(값) 이 실행되며 o_ccode 칼럼값이 변경된다.
*/
-- MySQL 은 Update, Delete 를 2개 이상 레코드(데이터, Row) 에
-- 대하여 실행할 수 없도록 초기 세팅되어 있다.
-- 현재 tbl_orders Table 전체 데이터에 Update 를 실행해야
-- 하므로 잠시 SAFE_UPDATE 를 해제한다.
SET SQL_SAFE_UPDATES = 0;

UPDATE tbl_orders O
SET o_ccode = 
(
	SELECT oc_ccode
    FROM tbl_order_customer OC
    WHERE O.o_num = OC.oc_onum
);

SET SQL_SAFE_UPDATES = 1;

SELECT * FROM tbl_customer;

-- 데이터 Update 확인
SELECT * FROM tbl_orders O
JOIN tbl_customer C
ON O.o_ccode = C.c_code;

-- FK 설정을 위한 검증
/*
LEFT JOIN 을 실행할 때
어떤 테이블을 LEFT 왼쪽에 둘 것인가?
1:N 의 관계는 무조건 N 테이블 - FK 를 설정하는 Table
1:1 일 관계는 ON 조건에 설정하는 칼럼이 PK 가 아닌 Table
*/
SELECT * FROM tbl_orders O
LEFT JOIN tbl_customer C
ON O.o_ccode = C.c_code
WHERE C.c_code IS NULL;

ALTER TABLE tbl_orders
ADD CONSTRAINT fk_oc FOREIGN KEY(o_ccode)
REFERENCES tbl_customer(c_code);

SELECT * FROM tbl_customer;

/*
MySQL 에서는 칼럼에 대하여 FullText 연산을
지원하지 않는다
Prisma 를 통하여 Like 연산을 수행하기 위하여
FullText 연산 기능을 ON 해주기
FullText 는 단어, 구문 검색기능을 수행한다
그리고 MySQL DBMS 자체의 독특한 Index 를 걸어서
검색 성능을 조금이라도 높이기 위한 조치를 취한다
*/
ALTER TABLE tbl_customer
ADD FULLTEXT(c_name,c_tel);

-- 인덱스 지우는 2가지 방법
ALTER TABLE tbl_customer
DROP INDEX c_name;

DROP INDEX c_name ON tbl_customer;