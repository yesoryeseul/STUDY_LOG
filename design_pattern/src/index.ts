import IEGrimpan from "./IEGrimpan.js";
import ChromeGrimpan from "./ChromeGrimpan.js";

/**
 *
 * Simple Factory(심플 팩토리 패턴)
 *
 * 주로 type을 받아 타입에 따라 다른 객체를 반환
 *
 * SRP 원칙 위반(변경의 이유가 두 가지다.)
 * -> 타입 판단을 통해 if/else 분기가 추가된다거나
 * -> 객체 생성 시 매개변수가 들어갈 수도 있다거나
 */
function grimpanFactory(type: string) {
  if (type === "ie") {
    return IEGrimpan.getInstance();
  } else if (type === "chrome") {
    return ChromeGrimpan.getInstance();
  }
  // 사파리가 추가된다면 이렇게 하나만 추가하면 되는 것이 심플 팩토리
  else if (type === "safari") {
    return SafariGrimpan.getInstance();
  } else {
    throw new Error("일치하는 type이 없습니다");
  }
}

function main() {
  grimpanFactory("ie");
  grimpanFactory("chrome");
  grimpanFactory("safari");
}

main();
