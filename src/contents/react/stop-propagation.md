---
title: "div과 div안의 button onClick 이벤트 동시 다루기"
date: "2021-11-01"
draft: false
path: "/blog/react/stop-propagation"
series: "React"
tags: ["React", "Typescript"]
---

<br>
<br>

### 🗡 stopPropagation

| button의 이벤트의 `stopPropagation()`를 실행시키면 된다.

```ts
const Page = () => {
  const onClick = (e: React.MouseEventHandler<HTMLButtonElement>) => {
    e.stopPropagation();
    console.log("inner onClick");
  };

  return (
    <div onClick={() => console.log("div onClick")}>
      <button onClick={onClick}>click</button>
    </div>
  );
};
```
