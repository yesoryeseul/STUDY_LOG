import { useState } from "react";
import PropTypes from "prop-types";
import "./number-of-characters.css";

/**
 *
 * 1번 방식
 * 글자수 자르기
 *
 * width가 어느정도 고정되어있는 경우에는 사용해도 괜찮을 듯 싶으나 그렇지 않고 반응형에서 화면 넓이가 넓을 때 한 줄이어도 [...더보기]버튼이 렌더링된다. (반응형 대응에 썩 좋지 않음)
 *
 */

const NumberOfChar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const limit = isExpanded ? text.length : 50;

  const onClickToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="container">
      <span className={text.length > limit ? "text-container" : ""}>
        {text.slice(0, limit)}
        {text.length > 50 && (
          <button className="button" onClick={onClickToggle}>
            {isExpanded ? "닫기" : "...더보기"}
          </button>
        )}
      </span>
    </div>
  );
};

NumberOfChar.propTypes = {
  text: PropTypes.string.isRequired,
};

export default NumberOfChar;

const text =
  "이 편지는 영국에서 최초로 시작되어 일년에 한바퀴를 돌면서 받는 사람에게 행운을 주었고 지금은 당신에게로 옮겨진 이 편지는 4일 안에 당신 곁을 떠나야 합니다. 이 편지를 포함해서 7통을 행운이 필요한 사람에게 보내 주셔야 합니다. 복사를 해도 좋습니다. 혹 미신이라 하실지 모르지만 사실입니다.";
