---
title: "Gatsby 블로그 리팩토링"
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
   파일 네이밍에 관한 경고이다. 난 SearchEngine으로 변경했다.
4. name없이 `export default () => {}`에 대한 경고도 있었다.
5. m1에서 설치할 때 발생하는 이슈

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

<br>
<br>

### 🗡

리팩토링을 하면서야 프로젝트 구조를 제대로 이해하게 되었다.

취향껏 커스터마이징을 시작해보자.

1. `gatsby-config.js`&nbsp; 작성자의 정보사항을 수정해주자.
2. `./images/gatsby-icon.png`&nbsp; 웹 아이콘을 대체해주자.
3. `./src/content`에서 markdown파일을 작성하면 즉시 글이 생긴다.
4. `./src/pages`에서 파일명이 사이트의 경로가 된다.
   - `index.js` 같은 경우 기본 URL이 된다. `bepyan.github.io`
   - `blog.js` 블로그 페이지, 작성한 포스트의 리스트를 보여주는 화면.
5. `./src/components`
   - `layout.css`&nbsp; 전체 기본 스타일을 수정할 수 있다.
   - `Layout.js`&nbsp; 페이지에 대한 레이아웃을 명시한다. Header, Footer를 수정할 수 있다.
   - `LandingBio.js`&nbsp; 프로필 화면을 수정할 수 있다.
   - `Navigation.js`&nbsp; 블로그 헤더에 대한 컴포넌트이다.
   - `SearchEngine.js`&nbsp; [Helmet](./3)을 사용해서 크롤러에게 컨탠츠에 대한 정보를 명시할 수 있다.

<br>
<br>

### 🗡

글 드래그에 대한 스타일 설정

```css
br {
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

h1::selection,
h2::selection,
h3::selection,
h4::selection,
h5::selection,
h6::selection,
p::selection,
strong::selection,
span::selection,
a::selection {
  background: #dee9ff;
}
li::selection {
  background: #dee9ff90;
}
code::selection,
code > span::selection {
  background: #dee9ff30;
}
```

<br>
<br>
