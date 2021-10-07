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

`gh-pages`를 통해서 Git Page로 배포할 예정이다.

먼저 github repository를 파도록 하자.<br>
레포지토리 이름은 `${github id}.github.io` 파도록 하자! 편하게 자동화를 위해!

default branch는 `dev`로 파도록 하자.<br>
이제 빌드를 하면 된다.

```shell
git branch -M gh-pages
git checkout gh-pages
npm i --save-dev gh-pages
```

`gh-pages` 브랜치를 파고 모듈 설치하자

```
"scripts": {
    "deploy": "gatsby build && gh-pages -d public",
}
```

`package.json`에 스크립트를 추가하자

```
git push -u origin gh-pages
```

변경사항을 커밋하자

<br>

github에서 브랜치가 생겼는지 꼭 확인하고 다음 작업을 진행하자.

```
npm run deploy
```

`Repository -> Settings -> Pages`가서 Source가 gh-pages 브랜치로 save되어 있는지 확인한다.

시간이 조금 지나면 배포되었음을 알 수 있다!

[bepyan.github.io](https://bepyan.github.io)

<br>
<br>

### 🗡 Github Actions으로 자동배포

dev 브랜치에 푸시를 하면 자동으로 배포되는 것이 목표이다.

우선 [github 토큰](https://github.com/settings/tokens)을 구하로 가자.

- 기존 만든 것이 있다면 `Regenerate token`하면 된다.

`Settings -> Secret -> Secrets -> New repository secret` 가서 Token을 등록하도록 하자.

- Github에서 `Env`로 사용된다고 생각하면 된다.
- 나같은 경우 Key는 `TOKEN`, Value에 토큰을 복사했다.

<br>

`Actions -> set up a workflow yourself` 가서 `main.yml` 파일을 만들자.

```yml
name: Deploy Project
on:
  push:
    branches:
      - dev
jobs:
  update:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@master
      - name: Set up Node.js
        uses: actions/setup-node@master
        with:
          node-version: 12.x
      - name: Cache node_modules
        uses: actions/cache@v1
        with:
          path: node_modules
          key: ${{runner.OS}}-build-${{hashFiles('**/yarn.lock')}}
          restore-keys: |
            ${{ runner.OS }}-build-${{ runner.OS }}-
      - name: Install dependencies
        run: yarn install --prod --pure-lockfile

      - name: Build
        run: yarn run build
        env:
          NODE_ENV: production
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v2.5.0
        env:
          PERSONAL_TOKEN: ${{secrets.TOKEN}}
          PUBLISH_BRANCH: gh-pages
          PUBLISH_DIR: ./public
          SCRIPT_MODE: true
```

- `on: push: branches: dev`

  - 해당 브랜치에 push가 들어오면 action을 실행하겠다.

<br>

- github의 서버(우분투)에서 action이 실행되는데
  - NodeJS를 설정하고
  - node_modules를 설치하고
  - build하고
  - gh-pages 브랜치에 deploy한다. 이때 `gh-pages`가 배포할 때 사용자의 토큰이 필요하다.

<br>

이제 완성했다. 이제 내용을 작성하고 `dev` 브랜치에 커밋을 하로 가자!
