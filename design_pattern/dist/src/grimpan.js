// 싱글턴 패턴 - 생성

/**
 * js 파일의 문제점
 *
 * private같은 메서드가 사라짐!
 *
 * => Symbol 사용(js에서 고유한 값)
 */

const GRIMPAN_CONSTRUCTOR_SYMBOL = Symbol();

Symbol() === Symbol(); // false

// 싱글턴 패턴 구현
class Grimpan {
  static instance;
  constructor(canvas, symbol) {
    if (symbol !== GRIMPAN_CONSTRUCTOR_SYMBOL) {
      throw new Error("new를 통해 호출할 수 없습니다.");
    }
    if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
      throw new Error("엘리먼트를 입력하세요");
    }
  }
  initialize() {}
  initializeMenu() {}
  static getInstance() {
    if (!this.instance) {
      this.instance = new Grimpan(
        document.querySelector("canvas"),
        GRIMPAN_CONSTRUCTOR_SYMBOL
      );
    }
    return this.instance;
  }
}
export default Grimpan;

// 서로 다른 심볼이 될 수밖에 없어서 private를 구현할 수 있다.
// new Grimpan(Symbol()); !== GRIMPAN_CONSTRUCTOR_SYMBOL

/**
 * 싱글턴 패턴은 어떠한 객체가 반드시 하나만 생성되어야 할 때, 그리고 외부(클라이언트)에서 접근이 가능하여야 한다.
 * (*디자인패턴에서 클라이언트는 패턴 코드를 가져다 쓰는 사람!)
 *
 * 단점..
 * private 메소드 때문에 테스트에 한계가 있다.
 *
 * 위 코드의 getInstance 의 경우 SOLID의 SRP(단일 책임의 원칙)에 어긋난다는 의견이 있다 -> SRP는 하나의 책임을 가지는 -> 바꿔야 하는 상황에서 바꾸어야 하는 이유가 한 가지가 되어야 한다고 이해하면 더 쉽다.
 *
 * ->  왜 위반일까?
 * getInstance는 new Grimpan을 생성 -> 그림판을 좀 다르게 생성하고 싶어 바꾸고 싶은 경우 new Grimpan(~)을 수정하게 되는데
 * getInstance는 그림판 생성과 그림판 하나인 것을 보장하는 코드로 두 가지 책임을 가진다
 */
