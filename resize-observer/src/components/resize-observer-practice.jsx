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
        style={{
          width: "200px",
          height: "200px",
          background: "lightblue",
          resize: "both",
          overflow: "auto",
          border: "2px solid black",
          padding: "10px",
        }}
      >
        리사이징 해보세요
      </div>
    </div>
  );
}
