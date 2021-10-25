---
title: "( 면접대비 ) Network 문제집"
date: "2021-10-24"
draft: false
path: "/blog/cs/network"
series: "면접 대비하기"
tags: ["CS", "면접"]
---

> 문제에 대한 키워드를 정리해서 키워드 기반으로 대답을 연습하는 공간.

<div style="text-align:center">
    <img src="https://c.tenor.com/2ER74Ee4Ou0AAAAC/hmmnotbad-hmm.gif" width="49%">
</div>

<br>
<br>

### 🗡 네트워크 전반

<details>
<summary>&nbsp; OSI 7계층에 대해서 설명해주세요.</summary>
<p>

- 계층적 단계, 독립적, 오류 파악
- 응용, 표현, 세션, 전송, 네트워크, 데이터링크, 물리

</p>
</details>

<br>

<details>
<summary>&nbsp; TCP/IP 계층모델에 대해서 설명해주세요.</summary>
<p>

- 응용, 전송, 네트워크, 데이터링크

</p>
</details>

<br>

<details>
<summary>&nbsp; 프로토콜에 대해서 설명해주세요.</summary>
<p>

- 통신규약

</p>
</details>

<br>

<br>
<br>

### 🗡 HTTP

<details>
<summary>&nbsp; HTTP에 대해서 설명해주세요.</summary>
<p>

- HyperText Transfer Protocol
- HTML, 비연결, 무상태
- 80, 443

연결지향적.

</p>
</details>

<br>

<details>
<summary>&nbsp; HTTPS에 대해서 설명해주세요.</summary>
<p>

- HTTP + Secure Sockey Layer

</p>
</details>

<br>

<details>
<summary>&nbsp; HTTPS 암호화 방법</summary>
<p>

- TLS, 암호화 키

</p>
</details>

<br>

<details>
<summary>&nbsp; 암</summary>
<p>

- 데이터 유출

</p>
</details>

<br>

<details>
<summary>&nbsp; HTTP 1.1 버전에 대해서 설명해주세요</summary>
<p>

- 최초 표준, 커넥션 재사용, 파이프라이닝

</p>
</details>

<br>

<details>
<summary>&nbsp; HTTP 상태코드에 대해서 설명해주세요.</summary>
<p>

- 5개 클래스로 구분, 통신 트랜잭션를 쉽게 파악
  | | | |
  | --- | --------------------------------------- | ------------------- |
  | 1xx | 정보 () | 100 ...|
  | 2xx | 성공 | 200. 201. 202. 204. ... |
  | 3xx | 리다이렉션 (요청 완료를 위해 추가 작업) | |
  | 4xx | 클라이언트 오류 | 400. 401. 403. 404. ... |
  | 5xx | 서버 오류 | 500 ...|

</p>
</details>

<br>

<details>
<summary>&nbsp; HTTP 400번대 에러코드가 발생하면 어떻게 대처할건가?</summary>
<p>

- 클라이언트 요청에 오류가 있다는 코드로 API명세에 따라 요청을 잘 보냈는지 확인한다.
- 정말 문제를 파악하지 못했다면 벡엔드 개발자에게 요청을 한다.

</p>
</details>

<br>

<details>
<summary>&nbsp; HTTP 2.0에 대해서 설명해주세요.</summary>
<p>

- streams 개념
- HOLB 문제

</p>
</details>

<br>

<br>
<br>

### 🗡 TCP & UDP

<details>
<summary>&nbsp; 전송 계층에 대해서 설명해주세요.</summary>
<p>

- End Point간의 송수신

</p>
</details>

<br>

<details>
<summary>&nbsp; TCP에 대해서 설명해주세요.</summary>
<p>

- 신뢰성 (흐름제어, 혼잡제어, 오류제어), 연결성

</p>
</details>

<br>

<details>
<summary>&nbsp; UDP에 대해서 설명해주세요</summary>
<p>

- 낮은 신뢰성, 단순하며 빠름
- 체크섬

</p>
</details>

<br>

<details>
<summary>&nbsp; 혼잡제어와 흐름제어의 차이</summary>
<p>

- 양

</p>
</details>

<br>

<br>
<br>

### 🗡 IP

<details>
<summary>&nbsp; 네트워크 계층에 대해서 설명해주세요.</summary>
<p>

- 운반 경로

</p>
</details>

<br>

<details>
<summary>&nbsp; IP 버전에 대한 차이를 말해주세요.</summary>
<p>

| IPv4                 | IPv6                 |
| -------------------- | -------------------- |
| 32비트 (4개의 8비트) | 128비트 (8개 16비트) |
| . 으로 구분          | : 으로 구분          |

</p>
</details>

<br>

<details>
<summary>&nbsp; IPv4에서의 클래스에 대해 설명해주세요.</summary>
<p>

- 네트워크 영역과 호스트 영역을 구분
  | | | |
  | ---- | ------- | -------- |
  | A. | 0xxx | 13.0.0.0 |
  | B. | 10xx | |
  | C. | 110x | |
  | D.E. | 연 구용 | |

</p>
</details>

<br>

<details>
<summary>&nbsp; 공인IP와 사설IP의 차이에 대해서 설명해주세요.</summary>
<p>

- 유일무이한 주소

</p>
</details>

<br>

<details>
<summary>&nbsp; 패킷 스위칭, 서킷 스위칭</summary>
<p>

- 정해진 경로, 독점

</p>
</details>

<br>

<br>
<br>

### 🗡 프록시 서버

- 클라이언트이자 서버인 노드
- 실제 서버로부터 데이터를 가져와야 한다.
- 서버부하, 캐시, 방화벽의 역할

<details>
<summary>&nbsp; 로드 밸런싱</summary>
<p>

- 몰린 요청을 여러 서버로 배분

</p>
</details>

<br>

<details>
<summary>&nbsp; NAT</summary>
<p>

- Network Address Translation / 네트워크 주소 변환
- 사설IP의 단점을 극복.

</p>
</details>

<br>

<details>
<summary>&nbsp; DHCP</summary>
<p>

- Dynamic Host Configuration Protocol
-

</p>
</details>

<br>
