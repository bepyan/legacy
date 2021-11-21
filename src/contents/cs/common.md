---
title: "개발상식 문제집"
date: "2021-10-14"
draft: false
path: "/blog/cs/common"
series: "면접 대비하기"
tags: ["CS", "면접"]
---

<br>
<br>

### 🗡 프로그래밍 공통

<details>
<summary>&nbsp; Parameter와 인자(Argument)의 차이는 뭔가요?</summary>
<p>

- Parameter는 함수를 선언할 때 사용된 변수이고 Argument는 함수가 호출되었을 때 파라미터로 전달된 실제 값이다.

</p>
</details>

<br>

<details>
<summary>&nbsp; Call By Value와 Call By Reference 차이가 뭔가요?</summary>
<p>

- 데이터를 접근하는 방법이 다르다.
- Call By Value는 데이터의 값을 복사하여 사용한다.
- Call By Reference는 인자의 메모리 주소를 참조하여 사용한다.
- Call By Value는 메모리 공간을 더 사용하고 느리지만 side effect를 일으키지 않는다.

</p>
</details>

<br>

<details>
<summary>&nbsp; 프레임워크와 라이브러리의 차이가 뭔가요?</summary>
<p>

- 흐름을 제어하는 주체에 차이가 있다.
- 프레임워크는 전체적 흐름을 제어하며 그 흐름안에서 사용자의 코드가 동작하게 된다.
- 라이브러리는 사용자가 흐름을 제어하여 필요한 상황에 사용된다.

</p>
</details>

<br>

<br>
<br>

### 🗡 API

<details>
<summary>&nbsp; API에 대해서 설명해주세요.</summary>
<p>

- Application Programming Interface
- 어플리케이션을 다루기 위한 명령어 집합, 레스토랑의 '웨이터' 역할, 데이터 통신

</p>
</details>

<br>

<details>
<summary>&nbsp; RESTful API에 대해서 설명해주세요.</summary>
<p>

- REST하다. Representational State Transfer
- URI와 HTTP프로토콜를 기반하여 웹에 최적화
- JSON, XML, HTML
- 6가지 아키텍처 가이드라인을 준수
  - 클라이언트-서버
  - stateless 서버 (세션정보는 클라이언트에)
  - 캐시 가능 데이터
  - 표준화된 형식
  - 계층적
  - 코드 온 디맨드 (실행 가능한 코드를 전송하여 클라이언트 기능 확장, 선택적)

</p>
</details>

<br>

<details>
<summary>&nbsp; SOAP에 대해서 설명해주세요.</summary>
<p>

- Simple Object Access Protocol
- ACID 준수, state, WS-Security
- 성공/반복 실행 로직 (처음부터 끝까지 신뢰성을 제공)

</p>
</details>

<br>

<details>
<summary>&nbsp; SOAP와 REST의 차이점에 대해서 설명해주세요.</summary>
<p>

- 프로토콜, 아키택처
- 보안, 경량화

</p>
</details>

<br>

<details>
<summary>&nbsp; GraphQL에 대해서 설명해주세요.</summary>
<p>

- 메뉴없이 구성품 목록으로 요청

</p>
</details>

<br>

<details>
<summary>&nbsp; URI와 URL에 대해서 설명해주세요.</summary>
<p>

- uniform resource identifier, uniform resource locator
- URL는 URI의 가장 흔한 형태.
  - 정보 리소스를 고유하게 식별하고 위치를 지정한다.

<br>

- URN, 위치가 아닌 이름(name)
- 위치가 바뀌어도 원하는 자원을 찾을 수 있다.

</p>
</details>

<br>

<br>
<br>

### 🗡 참고

- https://mangkyu.tistory.com/88
