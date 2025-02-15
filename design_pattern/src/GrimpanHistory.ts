import Grimpan from "./AbstractGrimpan.js";
import ChromeGrimpan from "./ChromeGrimpan.js";
import IEGrimpan from "./IEGrimpan.js";

/**
 * Prototype Pattern
    복제하기 패턴
    clone메서드를 잘 구현하는 것이 핵심
    속성이 여러 개가 있을 때 일부만 바꾸는 경우에 유용

    이렇게 생성하는 것보다
    const a = new A(1,2,3,4,5,6,7,8)
    const a2 = new A(1,2,30,4,5,6,70,8)

    이렇게 일부 수정
    const a3 = a.clone();
    a3.three = 30;
    a3.seven = 70

    어떤 값을 캐싱하여 생성하는 것을 클론함수를 통해 만드는 것

    private 속성은 clone이 어려워 프로토타입 패턴은 사용 하지 않는 편이 좋음
 */

interface Clonable {
  clone(): Clonable;
}

class HistoryStack extends Array implements Clonable {
  clone() {
    return this.slice() as HistoryStack;
  }
}

// GrimpanHistory 추상 클래스 생성
export abstract class GrimpanHistory {
  grimpan: Grimpan;
  stack: HistoryStack;
  protected constructor(grimpan: Grimpan) {
    this.grimpan = grimpan;
    this.stack = new HistoryStack();
  }
  getStack() {
    return this.stack.clone();
  }
  setStact(stack: HistoryStack) {
    this.stack = stack.clone();
  }
  abstract initialize(): void;
  static getInstance(grimpan: Grimpan) {}
}

export class IEGrimpanHistory extends GrimpanHistory {
  private static instance: IEGrimpanHistory;
  override initialize(): void {}

  static override getInstance(grimpan: IEGrimpan): IEGrimpanHistory {
    if (!this.instance) {
      this.instance = new IEGrimpanHistory(grimpan);
    }
    return this.instance;
  }
}

export class ChromeGrimpanHistory extends GrimpanHistory {
  private static instance: ChromeGrimpanHistory;
  override initialize(): void {}

  static override getInstance(grimpan: ChromeGrimpan): ChromeGrimpanHistory {
    if (!this.instance) {
      this.instance = new ChromeGrimpanHistory(grimpan);
    }
    return this.instance;
  }
}
