---
title: "( 면접대비 ) Database 문제집"
date: "2021-10-25"
draft: false
path: "/blog/cs/database"
series: "면접 대비하기"
tags: ["CS", "면접"]
---

<br>
<br>

### 🗡 개요

<details>
<summary>&nbsp; DB를 사용하는 이유?</summary>
<p>

- 어플리케이션으로 부터의 독립

</p>
</details>

<br>

<details>
<summary>&nbsp; DBMS에 대해서 설명해주세요.</summary>
<p>

- DB Manage System
- 인덱스, 트랜잭션 (동시 접근)

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
  - 이런 경우를 판단하고, 인덱스를 사용한 검색을 수행할지 말지 결정

</p>
</details>

<br>

<details>
<summary>&nbsp; 클러스터 인덱스와 결합 인덱스에 대해서 설명해주세요.</summary>
<p>

- 비슷한 데이터, 인접
- 2개이상의 칼럼

</p>
</details>

<br>

<br>
<br>

### 🗡 RDBMS

<details>
<summary>&nbsp; RDBMS에 대해서 설명해주세요.</summary>
<p>

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
<summary>&nbsp; 정규형에 대해서 설명해주세요</summary>
<p>

- 테이블 규칙, 무결성, 중복성

</p>
</details>

<br>

<details>
<summary>&nbsp; 3NF 와 BCNF의 다른점은? </summary>
<p>

- 지정자가 후보키여야함

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

<br>
<br>

### 🗡 NoSQL

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
<br>

### 🗡 참고
