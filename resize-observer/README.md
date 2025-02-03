# how to start

> npm run dev

# Resize Observer에 대해 공부해보자!

> Resize Observer는 대상 요소의 크기 변화를 관찰하고 콜백을 실행하는 API이다. 크기 변화를 제어할 경우 발생할 수 있는 무한 콜백 루프나 순환 종속성 등의 다양한 문제 없이 사용 가능하다.

> Window.addEventListener의 'resize' 와는 다르다. window의 resize 이벤트는 `브라우저 크기 변화를 감지`하고, ResizeObserver는 브라우저가 아닌 `특정 요소자체의 크기 변화를 감지한다`

## ResizeObserver()

- 새로운 ResizeObserver 객체를 생성하여 반환한다.

## Method

- `ResizeObserver.disconnect()`
  : 특정 관찰자의 모든 관찰된 요소 대상을 관찰을 취소한다.

- `ResizeObserver.observe()`
  : 지정된 요소의 관찰을 시작한다.

- `ResizeObserver.unobserve()`
  : 지정된 요소의 관찰을 종료한다.

## Code Example

```js
import { useEffect, useRef } from "react";

export default function ResizeObserverPractice() {
  const targetRef = useRef(null);

  useEffect(() => {
    if (!targetRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { borderBoxSize, contentBoxSize, contentRect } = entry;
        console.log("Border Box Size:", borderBoxSize);
        console.log("Content Box Size:", contentBoxSize);
        console.log("Content Rect:", contentRect);
      }
    });
    if (targetRef.current) {
      resizeObserver.observe(targetRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []); // 두 번째 인자로 빈 배열[]을 전달하면 useEffect는 컴포넌트가 마운트된 후 한 번만 실행되지만 ResizeObserver를 사용하면 브라우저 창 크기 변화를 관찰하는 동안에는 useEffect가 컴포넌트의 생명주기 동안 지속적으로 실행된다.

  return (
    <div>
      <div
        ref={targetRef}
        style={{ width: "200px", height: "200px", background: "lightblue" }}
      >
        리사이징 해보세요
      </div>
    </div>
  );
}
```

### 속성

- borderBoxSize: 변경된 요소의 테두리 박스 크기를 나타내는 객체. inlineSize와 blockSize 속성으로 각각 요소의 가로 크기와 세로 크기를 제공한다. 이 값은 테두리를 포함한 전체 크기를 나타낸다.

- contentBoxSize: 변경된 요소의 콘텐츠 박스 크기를 나타내는 객체. inlineSize와 blockSize 속성으로 각각 요소의 가로 크기와 세로 크기를 제공한다. 이 값은 테두리와 패딩을 제외한 콘텐츠 영역의 크기를 나타낸다.

- contentRect: 변경된 요소의 크기 정보를 담는 DOMRectReadOnly 객체. 이 객체는 다양한 크기 관련 속성을 포함하고 있다.

<details>
<summary>reference</summary>
<div>

<ul>
<li><a href='https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver#instance_methods'>mdn ResizeObserver</a></li>
<li><a href='https://velog.io/@leeji/ResizeObserver'>ResizeObserver</a></li>
<li><a href='https://www.heropy.dev/p/0pVrDl'>JS Resize Observer, 요소의 크기 변화 관찰</a></li>
<li><a href='https://velog.io/@dpldpl/Maximum-update-depth-exceeded-ResizeObserver%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-%EC%84%B1%EB%8A%A5-%EC%B5%9C%EC%A0%81%ED%99%94-%EB%AC%B8%EC%A0%9C-%ED%95%B4%EA%B2%B0'>Maximum update depth exceeded: ResizeObserver를 활용한 성능 최적화 (문제 해결)</a></li>
</ul>

</div>
</details>
