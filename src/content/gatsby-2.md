---
title: "Gatsby 블로그 검색엔진 등록하기"
date: "2021-10-08"
draft: false
path: "/blog/2"
---

<br>
<br>

### 🗡

모듈에 레거시가 많아서 전체적인 리팩토링을 진행하자.

1. 모듈 업데이트 및 yarn으로 패키지 관리
    ```shell
    npm i -g npm-check-updates
    ncu -u
    ```
    package.lock 파일 제거
    ```shell
    yarn
    ```
2. Emotion 11 부턴 core 대신 react를 사용한다.
    ```
    yarn remove @emotion/core
    yarn add @emotion/react
    ```
3. `Imported JSX component SEO must be in PascalCase`

    


<br>
<br>

m1에서 설치할 때 발생하는 이슈
```
ERR! sharp Prebuilt libvips 8.9.1 binaries are not yet available for darwin-arm64v8
```
libvips가 M1 칩을 지원하지 않아서 발생하는 문제이다.

다시 설치해주도록 하자.
```
brew info vips
brew reinstall vips
brew config
```


### 🗡 Google Search Console

[구글 검색엔진](https://search.google.com/search-console/welcome?utm_source=about-page)에 등록할 수 있다.

- DNS에 연동하지 않았기에 왼쪽의 
