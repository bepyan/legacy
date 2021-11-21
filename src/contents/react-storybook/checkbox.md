---
title: "CheckBox 만들기"
date: "2021-10-17"
draft: false
path: "/blog/react-storybook/checkbox"
series: "React Storybook"
tags: ["React", "Storybook"]
---

![landing image](https://user-images.githubusercontent.com/65283190/137625859-a4795643-a94c-44eb-97c9-d93f5b518728.gif)

<br>
<br>

기본 요소 CheckBox. 하지만 생각보다 커스텀하기 어렵다. React + Emotion으로 만들어 보자.

**( 핵심 )**

- 못생긴 기존 input을 숨기고 이쁜 박스를 따로 배치하기.
- box는 style로 체크마크는 svg를 사용한다.
- custom hook으로 완전 편하게 만들자.

<br>
<br>

### 🗡 CheckBox 뼈대

만들 checkbox의 뼈대이다.

```ts
interface CheckBoxProps {
  id?: string           // form 에서 읽는 용도
  label: string         // UI에 랜더링될 텍스트
  checked?: boolean     // 체크 여부
  defaultChecked?: boolean // 기본 체크 여부
  disabled?: boolean    // 비활성화 여부
  onClick?: () => void  // 클릭시
}

export const CheckBox = ({label, props}:  CheckBoxProps) => {
    <label css={[style, props.disabled && disabledStyle]}>
        // value를 저장하기 위한 용도
        <input type="checkbox" {...props} />

        // 실제 체크박스
        <span className="checkbox">
            {svg icon}
        </span>

        // 체크박스의 라벨
        <span> {label} </span>
    </label>
}

const style = css``

const disabledStyled = css``
```

<br>
<br>
<br>

### 🗡 스타일 씌우기

**( 핵심 디테일 )**

- hover시
  - 컨테이너 background 색상 변화
  - 체크박스 border 색상 변화
  - 커서 변화
- check시
  - 체크박스에 zoom-in-out 효과
  - 체크박스 background 색상 바뀌기
  - 체크마크 그려지기
- disabled시
  - hover, 클릭 불가.
  - opacity를 줄여준다.

<br>

#### ( UI 만들기 )

레이아웃 잡기

```css
 {
  display: inline-flex;
  align-items: center;
  padding: 6px 8px;
  border-radius: 6px;
  overflow: hidden; /* border를 초과된 부분을 숨긴다 */
  /* ... */

  .checkbox {
    display: flex;
    align-items: center;
    justify-content: center;
    /* ... */
  }

  span:last-child {
    padding-left: 8px;
    line-height: 21px;
  }
}
```

<br>

기존 체크박스 숨기기

```css
input[type="checkbox"] {
  display: none;
}
```

<br>

체크 박스 형태 그리기

```css
.checkbox {
  width: 18px;
  height: 18px;
  border-radius: 4px;
  border: 1px solid #dedede;
  background-color: #f8f8f8;
  /* ... */
}
```

<br>

체크 마크 그리기

[여기서](https://iconmonstr.com/?s=check) 가져와 써도 된다

```js
<span className="checkbox">
  <svg width={12} height={10} viewBox="0 0 12 10">
    <polyline
      points="1.5 6 4.5 9 10.5 1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    ></polyline>
  </svg>
</span>
```

```css
svg {
  fill: none;
  stroke: #fff;
  stroke-dasharray: 16px;
  stroke-dashoffset: 16px;
}
```

<br>
<br>

#### ( 에니메이션 효과 넣기 )

색상은 css변수로 관리하기

```css
--checked-color: #588ced;
--hover-background: #dee9ff70;
--text-color: #65636a;
```

<br>

커서

```scss
user-select: none; // 드래그 불가
cursor: pointer;
```

<br>

hover시

```scss
&:hover {
  background: var(--hover-background);
  .checkbox {
    border-color: var(--checked-color);
  }
}
```

<br>

checked시

```scss
.checkbox {
  // ... 줌인아웃 효과
  transform: scale(1);
  transition: all 0.3s ease;
  svg {
    //... 마크 그리기 효과
    stroke-dasharray: 16px;
    stroke-dashoffset: 16px;
    transition: all 0.3s ease;
    transform: translate3d(0, 0, 0);
  }
}

input:checked + .checkbox {
  // ... 줌인아웃 효과
  animation: zoom-in-out 0.3s ease;
  svg {
    //... 마크 그리기 효과
    stroke-dashoffset: 0;
  }
}
@keyframes zoom-in-out {
  50% {
    transform: scale(0.9);
  }
}
```

<br>

#### ( disabled 효과 넣기 )

css 선택자로 하기에는 너무 복잡하니 props으로 전달 받은 값을 활용하자.

```js
;<label css={[style, props.disabled && disabledStyle]}></label>

const disabledStyle = css`
  pointer-events: none;
  opacity: 0.5;
`
```

<br>
<br>
<br>

### 🗡 CheckGroup 만들기

보통 CheckBox를 하나만 만들지 않기에 편하게 여러개 만들고 제어하자.

- `labels`에 index로 매핑하는 `checkList`을 받아서 사용
- index 기반으로 해당 체크박스를 체크한다.
- `checkedList` `onCheck` 없이 form으로도 사용할 수 있어 `required` 하지 않는다. (추후 방법 추가)

```ts
interface CheckGroupProps {
  labels: string[]
  checkedList?: boolean[]
  onCheck?: (index: number) => void
}

export const CheckGroup = ({
  labels,
  checkedList,
  onCheck,
}: CheckGroupProps) => {
  return (
    <>
      {labels.map((v, i) => (
        <CheckBox
          key={v}
          label={labels[i]}
          {...(checkedList && { checked: checkedList[i] })}
          {...(onCheck && { onClick: () => onCheck(i) })}
        />
      ))}
    </>
  )
}
```

<br>
<br>
<br>

### 🗡 Custom Hook 만들기

매번 state 덕질하고 onCheck 함수 만들 생각하면 머리가 어질어질하다. 물론 form으로 해결해도 되지만.<br>
체크박스 전부 선택했는지 파악하기 코드가 지저분해진다.

편하게 만들어 보자.

- label에 index로 매핑하는 `boolean[]`을 만든다.

```ts
import { CheckGroup } from "@components/Input"
import { useState } from "react"

interface Props {
  labels: string[]
  defaultChecks?: boolean[]
}

export const useChecks = ({ labels, defaultChecks }: Props) => {
  const [checkedList, setCheckedList] = useState(() =>
    labels.map((_, i) => !!defaultChecks && defaultChecks[i])
  )

  const isAllChecked = checkedList.every(x => x)

  const onCheckAll = () => {
    setCheckedList(labels.map(() => !isAllChecked))
  }

  const onCheck = (index: number) => {
    setCheckedList(checks => checks.map((v, i) => (i === index ? !v : v)))
  }

  const renderChecks = () => (
    <CheckGroup labels={labels} checkedList={checkedList} onCheck={onCheck} />
  )

  return { isAllChecked, checkedList, onCheckAll, renderChecks }
}
```

<br>
<br>

### 🗡 Story 만들기

```ts
import { useChecks } from "@hooks"
import { CheckBox, CheckGroup } from "./CheckBox"

export default {
  title: "Input/Checkbox",
  component: CheckBox,
}

export const Default = () => {
  return (
    <>
      <CheckBox label="사과연구반" />
      <CheckBox label="망고지연구반" defaultChecked />
      <CheckBox label="망고지연구반" disabled />
    </>
  )
}

export const WithHook = () => {
  const { isAllChecked, onCheckAll, renderChecks } = useChecks({
    labels: ["check1", "check2", "check3"],
    defaultChecks: [false, false, true],
  })

  return (
    <div>
      <CheckBox label="전체선택" checked={isAllChecked} onClick={onCheckAll} />
      {renderChecks()}
    </div>
  )
}
```

<br>
<br>
<br>

### 참고

- https://engineering.linecorp.com/ko/blog/line-securities-frontend-3/
- https://www.30secondsofcode.org/css/s/custom-checkbox
- https://stackoverflow.com/questions/26754497/css-disable-hover-effect
