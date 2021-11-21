---
title: "브라우저"
date: "2021-11-06"
draft: false
path: "/blog/cs/browser"
series: "면접 대비하기"
tags: ["CS", "면접"]
---

| 우리가 늘 사용하는 브라우저. 그치만 어떻게 동작하지..?

<br>
<br>

### 🗡 브라우저

<details>
<summary>&nbsp; 브라우저의 동작 원리를 간단하게 설명해 주세요.</summary>
<p>

- 랜더링 엔진
  ![랜더링 과정](https://media.vlpt.us/images/holim0/post/42405158-2d78-4448-8798-841038963e53/image.png)
  - Layout - 부모에서 자식 순서로 배치
  - Update Layer Tree와 Composite
- 브라우저 엔진 (js 런타)
- 인터페이스

</p>
</details>

<br>

<details>
<summary>&nbsp; CORS가 뭐고 어떻게 해결할 수 있나요?</summary>
<p>

- Cross Origin Resource Sharing 타 도메인 간 자원을 공유하는 것.
  - ( ex. 외부 API호출 )
  - 포트번호까지 일치해야 한다.
  - 응답의 파기 여부는 브라우저가 결정한다

<br>

- 해결방법
  1. 서버에서 `Access-Control-Allow-Origin` 헤더에 허용할 도메인을 설정한다.
  2. 클라이언트에서 프록시 서버를 이용하여 요청한다.
     - `webpack-dev-server`

<br>

- [참고](https://evan-moon.github.io/2020/05/21/about-cors/)

</p>
</details>

<br>

<details>
<summary>&nbsp; 크로스 브라우징에 대해서 설명해주세요.</summary>
<p>

- 웹표준에 따라 다양한 OS, 플랫폼(브라우저)에서 화면이 의도대로 랜더링되도록 작업하는 것. (**호환성**)
  - 브라우저마다 랜더링 엔진이 다르기 때문이다.
    종류  | &nbsp;  |  &nbsp;
    --|---|--
    Webkit 웹킷  | 애플답지않게 오픈소스  |  애플
    Blink 블링크  | webkit기반 현재 높은 점유율 (웨일, 엣지까지 이걸 쓴다)  |  구글
    Gecko 게코  |  파이어 폭스에서 사용한다. |  모질라
  - 그래서 css를 작성할 때 엔진별로 접두어를 다르게 붙인다.
    ```
      -webkit- : 구글, 사파리
      -mox- : 파리어폭스
      -ms- : 익스플로러
      -o- :오페라 하우스
    ```
  - 모든 브라우저에서 똑같은 화면을 그리는 것을 의미하진 않는다.

</p>
</details>

<br>

<details>
<summary>&nbsp; SSR과 CSR의 차이와 장단점에 대해서 설명해주세요.</summary>
<p>

- SSR는 서버로부터 완전히 랜더링된 HTML을 받는다.
- CSR는 서버로부터 받은 리소스(HTML, CSS, JS 등)를 갖고 화면을 랜더링한다.

<br>

- 서버 부하
- 페이지 전환 속도, 초기 구동 속도
- SEO, 보안

<br>

- [SSR 참고](https://d2.naver.com/helloworld/7804182)

</p>
</details>

<br>


<br>
<br>

### 🗡 URL

<details>
<summary>&nbsp; URL의 구성요소를 설명해주세요.</summary>
<p>

![URL구성요소](https://evan-moon.github.io/static/e25190005d12938c253cc72ca06777b1/21b4d/uri-structure.png)
- 포트번호를 추가할 수도 있다.

</p>
</details>

<br>
