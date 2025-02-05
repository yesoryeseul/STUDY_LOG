// 싱글턴 패턴 - 생성

// class Grimpan {
//   constructor(canvas: HTMLElement | null) {
//     if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
//       throw new Error("엘리먼트를 입력하세요");
//     }
//   }
//   initialize() {}
//   initializeMenu() {}
// }

// 이런식으로 같은 그림판을 불러와도 하나로 인식해야 한다.
// new Grimpan(document.querySelector("#canvas"));
// new Grimpan(document.querySelector("#canvas"));
// new Grimpan(document.querySelector("#canvas"));
// new Grimpan(document.querySelector("#canvas"));

// 싱글턴 패턴 구현
class Grimpan {
  private static instance: Grimpan;
  private constructor(canvas: HTMLElement | null) {
    if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
      throw new Error("엘리먼트를 입력하세요");
    }
  }
  initialize() {}
  initializeMenu() {}

  static getInstance() {
    if (!this.instance) {
      this.instance = new Grimpan(document.querySelector("canvas"));
    }
    return this.instance;
  }
}

export default Grimpan;

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
