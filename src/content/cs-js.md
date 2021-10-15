---
title: "( 면접대비 ) Javascript"
date: "2021-10-14"
draft: false
path: "/blog/cs/js"
---

- [🗡 함수 표현식 Function Expression](#-함수-표현식-function-expression)
- [🗡 화살표 함수 Arrow Function](#-화살표-함수-arrow-function)
- [🗡 참고](#-참고)

<br>
<br>

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
work(); // 에러
var work = function () {
  return "working";
};
work();
```

<br>

함수 선언식

```js
work();
// 호이스팅이 일어난다.
function work() {
  return "working";
}
work();
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
