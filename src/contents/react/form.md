---
title: "form 제대로 다루기"
date: "2021-11-01"
draft: false
path: "/blog/react/form"
series: "React"
tags: ["React", "Typescript"]
---

<br>
<br>

### 🗡 Form

VanillaJS를 다뤄보지 않고 React를 하면 아무래도 HTML에 대해서 조금 얇게 알고 있을 것이다.

회원가입 페이지를 만들 때 많은 state 때문에 고생한 기억이 있다..<br>
하지만 Form을 제대로 사용한다면 input의 state를 별도로 관리를 할 필요가 없다는 사실을 알고 있는가??

<br>
<br>

### 🗡 Javascript

```ts
const Page = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { id, pw } = e.target;
    console.log(id.value, pw.value);
  };

  return (
    <form onSubmmit={onSubmit}>
      <input name="id" />
      <input name="pw" />
      <button type="submmit">submmit</button>
    </form>
  );
};
```

<br>
<br>

### 🗡 Typescript

HTML의 타입이 다루기 까다롭다..

target의 타입을 따로 지정해줘야 한다.

- 방안 1

  ```ts
  interface TargetEvent extends React.FormEvent<HTMLFormElement> {
    target: EventTarget & {
      id: HTMLInputElement;
      pw: HTMLInputElement;
    };
  }

  const onSubmit = (e: TargetEvent) => {
    e.preventDefault();
    const { id, pw } = e.target;
    console.log(id.value, pw.value);
  };
  ```

- 방안 2

  ```ts
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { id, pw } = e.target as typeof e.target & {
      id: HTMLInputElement;
      pw: HTMLInputElement;
    };
    console.log(id.value, pw.value);
  };
  ```
