import { css } from "@emotion/react";

const reset = css`
  * {
    font-size: 16px;
    margin: 0;
    padding: 0;
  }

  ul,
  li {
    list-style: none;
  }
  textarea {
    resize: none;
    outline: none;
  }

  button:focus-visible {
    outline: none;
  }

  body {
    justify-content: center;
  }
`;

const global = css`
  @font-face {
    font-family: "Pretendard Variable";
    src: url("./fonts/pretendard/Pretendard-Bold.woff");
    font-weight: 700;
  }

  @font-face {
    font-family: "Pretendard Variable";
    src: url("./fonts/pretendard/Pretendard-Medium.woff");
    font-weight: 500;
  }

  @font-face {
    font-family: "Pretendard Variable";
    src: url("./fonts/pretendard/Pretendard-Regular.woff");
    font-weight: 400;
  }

  @font-face {
    font-family: "Pretendard Variable";
    src: url("./fonts/pretendard/Pretendard-Light.woff");
    font-weight: 100;
  }

  html {
    font-family: "Pretendard Variable";
  }
`;

export default css`
  ${reset}
  ${global}
`;
