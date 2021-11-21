---
title: "Database 문제집"
date: "2021-10-25"
draft: false
path: "/blog/cs/database"
series: "면접 대비하기"
tags: ["CS", "면접"]
---

<br>
<br>


### 🗡 개요

<br>

<details>
<summary>&nbsp; DB를 사용하는 이유가 뭔가요?</summary>
<p>

- 어플리케이션으로 부터의 독립
- 데이터 무결성
  - 동시 접근 제어

</p>
</details>

<br>

<details>
<summary>&nbsp; DBMS에 대해서 설명해주세요.</summary>
<p>

- DB Manage System
- 인덱스
- 트랜잭션 (동시 접근)

</p>
</details>

<br>

<details>
<summary>&nbsp; 데이터베이스에서의 인덱스에 대해서 설명해주세요.</summary>
<p>

- 추가공간, 검색속도
- 주소위치-값 매핑, 정렬,
- Hash Table, B+ Tree

</p>
</details>

<br>

<details>
<summary>&nbsp; 인덱스를 Hash Table, B+ Tree로 구현에 있어서의 차이를 설명해주세요.</summary>
<p>

- 값에 대한 비교
- O(1) O(Log(n))

</p>
</details>

<br>

<details>
<summary>&nbsp; 인덱스는 무조건 검색 속도를 향상시키나요?</summary>
<p>

- 아니다
  - 해당 secondary 인덱스에 대한 질의가 전체 데이터의 20% 이상을 리턴하게 되는 경우, 인덱스를 활용하지 않는 full table scan이 더 효율적이다.
  - Secondary index 탐색 → Primary index 탐색 → RID로 실제 데이터에 접근한다.
- 쿼리옵티마이저
  - 위 경우를 판단하고, 인덱스를 사용한 검색을 수행할지 말지 결정

</p>
</details>

<br>

<details>
<summary>&nbsp; 클러스터 인덱스와 결합 인덱스에 대해서 설명해주세요.</summary>
<p>

- 비슷한 데이터 인접
- 2개이상의 칼럼

</p>
</details>

<br>

<br>
<br>

### 🗡 RDBMS

<br>

<details>
<summary>&nbsp; RDBMS에 대해서 설명해주세요.</summary>
<p>

- 테이블간의 관계를 갖음
- SQL, Query

</p>
</details>

<br>

<details>
<summary>&nbsp; SQL</summary>
<p>

- 데이터가 고정된 열과 행을 가지고 있는 테이블

</p>
</details>

<br>

<br>

#### 트랜잭션

<br>

<details>
<summary>&nbsp; RDBMS의 트랜잭션에 대해서 설명해주세요.</summary>
<p>

- DB의 상태를 변화시키는 일련의 연산
- ACID
  - 원자성
  - 일관성 (Consistency)
  - 독립성
  - 지속성

</p>
</details>

<br>

<details>
<summary>&nbsp; 트랜잭션의 상태에 대해서 설명해주세요.</summary>
<p>

![트랜잭션 상태](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FCWSqM%2FbtqLlBbdCmE%2FuChTYZXD1wgWI9vvJ1kTn1%2Fimg.png)

- 부분 완료
  - 트랜잭션 연산을 실행했지만 commit 직전인 상태

</p>
</details>

<br>

<details>
<summary>&nbsp; 동시에 트랜잭션이 발생되면 어떻게 해결할 수 있는가?</summary>
<p>

- Lock을 사용하여 쓰레드를 직렬화 (Lock을 가진 트랜잭션이 동작을 수행)
- 
- 스냅샷

</p>
</details>

<br>

<details>
<summary>&nbsp; 트랜잭션의 격리수준에 대해서 설명해주세요.</summary>
<p>

- 여러 트랜잭션이 처리될 때, 트랜잭션끼리 얼마나 서로 고립시킬지 정한 수준 (동시처리 성능과 trade-off)

<br>

- `READ UNCOMMITTED`
  - 한 트랜잭션에서 커밋하지 않은 데이타에 다른 트랜잭션이 접근 
  - Dirty Read, Non-Repeatable Read, Phantom Read
- `READ COMMITTED`
  - 커밋이 완료된 데이타만 읽을 수 있다.
  - Non-Repeatable Read, Phantom Read
- `REPEATABLE READ`
  - Phantom Read
- `SERIALIZABLE`
  -  INSERT 문제

<br>

발생되는 문제
- Dirty Read
  - T1가 최종 커밋 전에 T2가 해당 데이터를 읽는 것.
- Non-Repeatable Read
  - T1에서 Read할 때 T2에서 변경하면 T1은 변경된 데이터를 읽게 된다.
- Phantom Read

<br>

Lock
- S Lock
  - 쓰기 가능
- X Lock
  - 모두 차단

- [참고](https://velog.io/@sa1341/트랜잭션-격리-수준Isolation-Level이란)

</p>
</details>

<br>

<details>
<summary>&nbsp; 트랜잭션에서에서 오류 발생시 어떻게 동작이 되나요?</summary>
<p>

- rollback
  - 모든 연산을 취소(Undo)하는 연산
- save point
  - 지정한 point까지 트랜잭션을 부분 취소할 수 있다.

</p>
</details>

<br>


<br>

#### 정규형

<br>

<details>
<summary>&nbsp; 정규화에 대해서 설명해주세요</summary>
<p>

- 함수의 종속성 이론
- 테이블 규칙, 무결성, 중복성
- 테이블을 분리

</p>
</details>

<br>


<details>
<summary>&nbsp; 1NF 2NF 3NF 차례대로 설명해보시죠.</summary>
<p>

1NF
  - 원자값 
  ![image](https://user-images.githubusercontent.com/65283190/140326711-76d43bb1-d855-49da-98ed-fa7679d955a9.png)
  ![image](https://user-images.githubusercontent.com/65283190/140326780-3a082072-b692-4818-8820-243fe233e6e1.png)

2NF
  - 완전 함수적 종속
  ![image](https://user-images.githubusercontent.com/65283190/140326943-3bc07909-cf7f-4278-bd1e-5317454cdc9c.png)
  ![image](https://user-images.githubusercontent.com/65283190/140326999-b3e81b6f-176f-4820-8b21-e590af4993a2.png)

3NF
  - 이행적 함수 종속
  - 학번 -> 학과 로 착각 될 수 있음
  ![image](https://user-images.githubusercontent.com/65283190/140327117-9e7a37bd-31d2-4958-a843-46ac1b123c3d.png)
  ![image](https://user-images.githubusercontent.com/65283190/140327164-dc387222-5ae7-420b-932e-63e7fb6b33fd.png)

[참고](https://minimax95.tistory.com/49)

</p>
</details>

<br>


<details>
<summary>&nbsp; 3NF 와 BCNF의 다른점은? </summary>
<p>

- 결정자(지정자)가 모두 후보키
  - 함수 종속 관계를 유지시키는 것
  ![image](https://user-images.githubusercontent.com/65283190/140328809-92ffc758-531f-4dd2-9bc3-964ca110d44d.png)
  ![image](https://user-images.githubusercontent.com/65283190/140328920-9d76b81e-0b10-4502-abb0-1ec3654a274c.png)


</p>
</details>

<br>

<details>
<summary>&nbsp; 비정규형에 대해서 설명해주세요.</summary>
<p>

- 데이터의 무결성을 떨어트리는 대신 데이터베이스의 **읽기성능을 향상**
  - JOIN X
  - CUD 성능 저하, 데이터 중복, 유지보수와 확장성
  - 역정규화, Entity 합체, Entity 분해

</p>
</details>

<br>

<br>

#### 키

<br>

<details>
<summary>&nbsp; 기본키, 대체키, 후보키에 대해서 설명해주세요.</summary>
<p>

- 후보키 = 키본키 + 대체키
- 튜플을 유일하게 식별할 수 있는 최소한의 속성의 집합
- 값 중복 X, null X

</p>
</details>

<br>


<details>
<summary>&nbsp; 부분키에 대해서 설명해주세요.</summary>
<p>

- 약한 개체의 기본키

</p>
</details>

<br>

<details>
<summary>&nbsp; 약한 개체와 강한 개체에 대해서 설명해주세요.</summary>
<p>

|           |                                               |
| --------- | --------------------------------------------- |
| 강한 개체 | 누구에게도 지배되지 않는 독립적인 개체 (주체) |
| 약한 개체 | 다른 개체의 존재 여부에 달려있는 개체 (관계)  |

- 식별 관계, 비식별 관계

</p>
</details>

<br>


<br>
<br>

### 🗡 NoSQL

<br>

<details>
<summary>&nbsp; NoSQL에 대해서 설명해주세요.</summary>
<p>

- Not only SQL
- 비정형 데이터,

</p>
</details>

<br>

<br>
<br>

### 🗡 기타

<br>

<details>
<summary>&nbsp; Partitioning(파티셔닝) 이란?</summary>
<p>

- 큰 Table이나 인덱스를 관리하기 쉬운 단위로 분리하는 방법
- 가용성, 관리용이성, 성능 (쿼리 분산)
- Join, 테이블과 인덱스를 같이 Partitioning

</p>
</details>

<br>

<details>
<summary>&nbsp; Partitioning 방법에 대해서 설명해주세요.</summary>
<p>

- 분할 기준
  |           |                                                |
  | --------- | ---------------------------------------------- |
  | Range     | 연속적인 숫자 기준으로 Partitioning (ex. 월별) |
  | List      | 키의 값을 통해 분류(ex. 지역으로 묶음)         |
  | Hash      | hash를 통해 균일하게                           |
  | Composite | 위의 기술을 결합시킴                           |
- 방법
  - Horizontal
    - 테이블 스키마에 변동은 없음
    - 하나의 서버가 고장나게 되면 데이터의 무결성 깨질 수 있음
  - Vertical
    -  이미 정규화된 Data를 분리
    -  자주 사용하는 컬럼등을 분리시켜 성능을 향상
- [참고](https://gmlwjd9405.github.io/2018/09/24/db-partitioning.html)

</p>
</details>

<br>


<details>
<summary>&nbsp; Sharding(샤딩) 이란?</summary>
<p>

- 데이터 -> 여러 DB에 저장 (Horizontal Partitioning)
- DB 트래픽 분산 
- 프로그래밍 복잡도 up

</p>
</details>

<br>

<details>
<summary>&nbsp; Sharding 방법에 대해서 설명해주세요.</summary>
<p>

- Module
  - PK % DB수
  - 데이터가 균일하게 분산
  - DB 증설시 인덱스를 재정렬 해야 함
- Range
  - PK 범위
  - 활성 계정에 따라 데이터가 몰릴 수 있음 (ex. 옛 유저가 1번 DB에 몰림)
- [참고](https://techblog.woowahan.com/2687/)

</p>
</details>

<br>

<details>
<summary>&nbsp; Replication(리플리케이션) 이란?</summary>
<p>

- Query 분산
- `Master / Slave` 
  - 여러 DBMS 시스템
  - `Slave` -> select 
  - `Master` -> insert, update, delete
- Master에서 발생한 DB 변동을 Slave 들에게 적용시킨다.
  - 성공한 query 전달
  - 변동된 데이터 전달
  - 위 방법을 결함시킬 수도 있음
  
![이미지](https://nesoy.github.io/assets/posts/20180216/3.png)

</p>  
</details>

<br>


<br>
<br>

### 🗡 참고
