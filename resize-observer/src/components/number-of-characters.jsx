import { useState } from "react";
import PropTypes from "prop-types";

/**
 *
 * 1번 방식
 * 글자수 자르기
 *
 * 문제점: 화면 넓이가 넓을 때 한 줄이어도 ...더보기가 나올 수 있다. (반응형 대응에 썩 좋지 않음)
 */

const NumberOfChar = ({ text }) => {
  const [limit, setLimit] = useState(50);

  const { string, isShowMore } = {
    string: text.slice(0, limit),
    isShowMore: text.length > limit,
  };

  const onClickMore = () => {
    setLimit(text.length);
  };
  return (
    <div>
      {string}
      {isShowMore && <button onClick={onClickMore}>...더보기</button>}
    </div>
  );
};

NumberOfChar.propTypes = {
  text: PropTypes.string.isRequired, // text는 문자열이며 필수 값으로 설정
};

export default NumberOfChar;
