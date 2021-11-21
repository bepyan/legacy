---
title: "걸어서 동네 속으로"
date: "2021-10-26"
draft: false
path: "/blog/retrospective/walk-into-town"
series: "프로젝트 회고"
tags: ["회고", "면접"]
---

[깃허브](https://github.com/walk-into-town/expo-app)

<br>
<br>

### 개발기간

- 21.04 - 21.06

<br>
<br>

### 사용한 기술 및 이유

내가 사용한 기술들

- Typescript
  - 현업에서 많이 사용되고 있다.
  - 타입을 명시함으로 Javascript의 고질적인 버그들을 컴파일 단계에서 검출할 수 있다.
  - 함수에 어떤 인자를 넘겨줘야하고 어떤 값을 리턴받는지를 파악하기 쉬워서 컴포넌트, 함수들을 활용하기 좋다.
- React Native, Expo
  - 안드로이드, iOS 모두를 지원하는 크로스 플랫폼으로 많은 사용자에게 앱을 제공할 수 있다.
  - 기존 React로 개발한 경험이 있기에 React Native 학습에 대한 상대적 부담이 작다.
  - Expo로 개발 인프라를 쉽게 구축할 수 있다.

<br>

이외 프로젝트에서 사용된 기술들

- Google Map, Google Place API
- AWS EC2, S3, Dynamodb
- Express
- GPT-2

<br>
<br>

### 역할

- React Native (UI제작) 1명 (나)
- React Native (Google Map 및 Google Place API) 1명
- AWS 및 Express 1명
- GPT-2 및 인공지능 1명

<br>
<br>

### 마주친 어려운 점

- Expo에서 카카오지도 SDK를 지원하지않았다.
  - 여러 지도 API 중 카카오지도가 더 상세한 위치를 표시할 수 있어서 카카오맵을 선택했다.
  - 당시 React Native, Expo에 대한 이해가 낮아서
  - WebView를 통한 카카오맵을 사용해보려했지만 앱과 상호작용이 어려워서 Expo와 지원이 되는 Gooble Map을 사용하기로 결정.
- FormData 통신으로 이미지 데이터가 잘 보내지지 않았다.
  - React Native의 ImagePicker에 대한 이해도가 낮았고 FormData에 대한 이해도가 낮았다.
  - 구글링을 통해서 다양한 통신 코드를 참조했고 벡엔드 개발자와 소통하여 데이터를 어떻게 받게 되는지 확인했다.
  - 결국 FormData의 객체 키값이 백엔드와 다르게 설정을 하여 발생한 문제임을 확인하고 해결했다.
- Expo에서 최초 기기의 위치를 가져오는데 iOS에서 5초이상 걸리는 문제가 있었다.
  - Google Map API의 지도가 로딩 될 때 받아오는 위치에 강제 화면이동하여 1-2초 안에 사용자의 위치를 표시할 수 있었다.

<br>
<br>

### 아쉬웠던 점

- 기능에 대한 우선순위를 제대로 세우지 못했다.
  - 초반 캠페인 제작하는 UI에 신경을 많이 쓴 나머지 게임화면, 캠페인 상세화면 구현할 때 시간에 쫒기게 되었다.
- 각자 맡은 기능 구현에 급급하여 코드리뷰를 진행하지 못했다.
- OAuth를 시도해보지 못했다.

<br>
<br>

### 좋았던 점

- **노션 로드맵**을 활용해서 프로젝트를 관리했다.
  - 협업에 용이했다. 비대면인 상황에서 실시간으로 같이 문서를 작성할 수 있었다.
  - 프로젝트관련된 자료들이 모두 한 화면에 담겨있어 관리하기 용이했다.
- 다양한 UI를 시도할 수 있었다.
  - 배달의 민족의 UI, 다양한 모달
  - Lottie, Animated를 통한 게임 에니메이션, 화면 전환 UI 구현
