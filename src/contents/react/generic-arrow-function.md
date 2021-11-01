---
title: "Typescript 제너릭 함수 제대로 활용하기"
date: "2021-11-02"
draft: false
path: "/blog/react/generic-arrow-function"
series: "React"
tags: ["React", "Typescript"]
---

<br>
<br>

### 🗡 타입 설정하는 법

일반 함수의 구현법

```ts
function foo<T>(x: T): T {
  return x;
}
```

<br>
ts파일에서의 화살표 함수의 구현법

```ts
const foo = <T>(x: T) => {
  //...
};
```

<br>

하지만 `.tsx` 파일에서는 `// ERROR : unclosed T tag` 에러가 발생한다.

컴파일러에게 이것은 태그가 아니라고 명시해 줘야 한다.

```tsx
const foo = <T extends unknown>(x: T) => {
  //...
};
```

<br>
<br>

### 🗡 통신에서 활용하기

```ts
interface APIResponse<T> {
  data?: T;
  error?: string;
}

export const onAxios = async <T>(
  props: AxiosRequestConfig
): Promise<APIResponse<T>> => {
  try {
    const { data } = await instance(props);
    return { data };
  } catch (e) {
    return { error: "통신 에러" };
  }
};
```

아래와 같이 통신응답의 타입을 명시할 수 있게 된다.

```ts
interface User {
  name: string;
}

const read_users = () => {
  return onAxios<User[]>({
    url: `/users`,
    method: "GET",
  });
};
```

<!-- <br>
<br>

### 🗡 컴포넌트에서 활용하기

```

``` -->

<br>
<br>

### 🗡 참고

- https://stackoverflow.com/questions/32308370/what-is-the-syntax-for-typescript-arrow-functions-with-generics
