---
title: "Javascript"
date: "2021-10-14"
draft: false
path: "/blog/cs/javascript"
series: "면접 대비하기"
tags: ["CS", "면접"]
---

### 🗡 함수 표현식 Function Expression

**( keyword )**

`고차함수` `호이스팅`

**( 핵심 )**

표현식은 변수에 값을 할당하는 것처럼 **함수를 할당**한다. 호이스팅이 일어나지 않고 클로저, 콜백으로 활용된다.

**( TMI )**

- 자바스크립트에서 함수는 값이다. 즉, `work()` 대신 `work` 쓰면 함수가 실행이 안된다.
- 클로저로 활용될 수 있다. 함수가 독립된 구문 형태로 존재하기 때문이다.
- 콜백(다른 함수 인자)으로 사용될 수 있다.
- IIFE : 즉시 주입 함수 표현식
  - `(() => {console.log("do")})()`

**( 꼬리질문 )**

<details>
<summary>&nbsp; 함수표현식과 함수선언식은 어떤 차이가 있을까요?</summary>
<p>

- 함수 선언식은 호이스팅에 영향을 받지만, 함수 표현식은 호이스팅에 영향을 받지 않는다.

함수 표현식

```js
work() // 에러
var work = function () {
  return "working"
}
work()
```

<br>

함수 선언식

```js
work()
// 호이스팅이 일어난다.
function work() {
  return "working"
}
work()
```

</p>
</details>

<br>

<details>
<summary>&nbsp; 익명함수는 표현식으로 사용될 수 있나요?</summary>
<p>

- 익명함수는 변수명이 없기에 표현식으로 사용될 수 없다.
- 선언식으로 사용될 수 있지만 간편한 arrow function으로 많이 쓴다.

</p>
</details>

<br>

<br>
<br>

### 🗡 화살표 함수 Arrow Function

**( keyword )**

`간결` `컨텍스트 없음`

**( 핵심 )**

함수를 화살표로 단순하고 간결한 문법으로 만들어 지고 실행 컨택스트도 갖지 않는다.

**( 근거 )**

- 실행 컨택스트가 생성되지 않으니 this, arguments, new, super도 없다.

**( 꼬리질문 )**

<br>

<br>

<br>
<br>

### 🗡 참고

- https://joshua1988.github.io/web-development/javascript/function-expressions-vs-declarations/
- https://ko.javascript.info/function-expressions#ref-127

<br>
<br>

### 🗡 앞으로 정리할 것.

<details>
<summary>&nbsp; Object과 Map</summary>
<p>

- `key`, `순회`
- Object는 string으로 된 키만 사용할 수 있다.
- Map은 모든 객체가 key가 될 수 있다.
- Object의 key를 delete할 때 성능적인 이슈가 있다고 한다.

</p>
</details>

<br>

<details>
<summary>&nbsp; this란 무엇인가요</summary>
<p>

</p>
</details>

<br>

<details>
<summary>&nbsp; call, bind, apply에 대해서 설명해주세요.</summary>
<p>

- 함수의 컨택스트를 변경시켜주는 함수입니다.
- 추가요망

</p>
</details>

<br>

<details>
<summary>&nbsp; 가상 DOM에 대해서 설명해주세요.</summary>
<p>

- 연산의 최종적인 결과를 주어 진다.

</p>
</details>

<br>

<details>
<summary>&nbsp; Typescript를 사용하는 이유가 뭔가요?</summary>
<p>

- 명시적 타입을 저정할 수 있어서 더욱 안정적인 프로그래밍을 할 수 있습니다.
- 타입이 맞지않는 연산에 대해서 실행시점이 아닌 컴파일단계에서
- 모듈을 공유하기 편하다.
- 타입에 대한 러닝커브가 존재하지만 더욱 빠르게 개발할 수 있게 된다.

</p>
</details>

<br>

<details>
<summary>&nbsp; CDN이 뭔가요?</summary>
<p>

- 컨탠츠를 내려받을 수 있는 네트워크입니다.
- 지역성, 속도

</p>
</details>

<br>

<details>
<summary>&nbsp; 웹 접근성과 시맨틱 마크업에 대해서 설명해주세요.</summary>
<p>

- 웹 접근성은 장애가 누구나 웹을 접근할 수 있게.
  - WAI-ARIA
- 시맨틱 마크업은 태그를 div로

</p>
</details>

<br>

<details>
<summary>&nbsp; Bable</summary>
<p>

- `Cross Browing` `트랜스 파일링`
- 웹팩은 여러 파일들을 하나의 파일로 모아주는
- 여러 모듈 파일을 하나의 모듈 파일로 모아준다.

</p>
</details>

<br>
