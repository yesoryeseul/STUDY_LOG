/**
 * Factory Method(팩토리 메서드)
 */

// abstract class는 ts에서만 볼 수 있다.
// 일반 class가 abstract class를 상속받을 수 있다.
import Grimpan from "./AbstractGrimpan";

// 추상체
abstract class AbstractGrimpanFactory {
  /**
   * 항상 추상적인 걸 가져와야 한다.
   * IEGrimpan, ChromeGrimpan와 같이 구체적인 것 금지!
   * 추상 클래스란 '이런 타입을 꼭 지켜야한다'의 개념 (인터페이스 역할을 한다고 봄)
   * 인터페이스와의 차이점: 추상 클래스는 실제 구현이 들어가기도 함
   */
  // abstract createGrimpan(): Grimpan;
  static createGrimpan() {
    // return Grimpan.getInstance();
    throw new Error("하위 클래스에서 구현 필요");
  }
}

export default AbstractGrimpanFactory;
