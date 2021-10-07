---
title: "Gatsby 블로그를 시작하기"
date: "2021-10-07"
draft: false
path: "/blog/gatsby-1"
---

<br>
<br>

> **Gatsby**. &nbsp React를 알면 쉽게 사용할 수 있는 정적사이트 생성기.

<br>
<br>

### 🗡 특징

**React + GrapQL기반**

- Jekyll은 Ruby 기반이기에 React에 친숙하면 Gatsby에 눈길이 갈거다.

<br>

**정적 사이트**

- 빈 HTML 페이지 안에 마크업을 추가해주는 SPA와 달리 Build 과정에서 마크업이 생성된다.
- 즉, SEO에 최적화 되어 있다.
- 필요에 따라 CSR과 SSR, lazy loading을 적절히 섞어 사용하여 단순한 static 페이지보다 좋다

<br>

**Markdown**

- 콘텐츠를 Markdown 파일로 관리하여 편하다.
- JAMstack를 통해 MD파일을 스타일을 씌워준다.
- HTML 템플릿에 MD를 담는다.

<br>
<br>

### 🗡

빠른 사이트 구축을 위해 많은 [오픈소스 탬플릿](https://www.gatsbyjs.com/starters?)을 참고할 수 있다.

난 [gatsby-starter-julia](https://www.gatsbyjs.com/starters/niklasmtj/gatsby-starter-julia) 이 디자인이 눈에 쏙 들어왔다. @emtion으로 스타일링이 되어 있다고 하니 커스텀하기도 나에게 딱이었다.

```shell
yarn global add gatsby-cli
```

```shell
npx gatsby new blog https://github.com/niklasmtj/gatsby-starter-julia
```

- Window에서는 앞에 `npx`은 빼도록 하자.

```
cd blog
gatsby develop
```

`http://localhost:8000/`로 서버가 구동된다!

<br>
<br>

### 🗡

커스터마이징을 시작해보자.

1. `gatsby-config.js`&nbsp 작성자의 정보사항을 수정해주자.
2. `./images/gatsby-icon.png`&nbsp 웹 아이콘을 대체해주자.
3. `./src/content`에서 markdown파일을 작성하면 즉시 글이 생긴다.
4. 레이아웃이 아쉬운 부분을 조금 수정하자!

   - `./src/pages/blog`에서 글 리스트를 수정할 수 있다.
   - `./src/components/layout`&nbsp Header, Footer를 수정할 수 있다.
   - `./src/components/landing-bio`&nbsp 프로필 화면을 수정할 수 있다.
   - `./src/components/layout.css`&nbsp 전체 기본 스타일을 수정할 수 있다.
   
    <br>

   - 나중에 변경사항 궁금하면 commit을 확인하도록 하자.
   - 드래그 설정한 부분
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

### 🗡 배포하기

