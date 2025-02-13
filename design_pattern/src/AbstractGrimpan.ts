// Factory Method, 추상체만 구현한다고 생각!

// 추상체
export default abstract class Grimpan {
  // abstract 속성이 아닌 경우(ex. private)도 사용 가능
  protected constructor(canvas: HTMLElement | null) {
    if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
      throw new Error("엘리먼트를 입력하세요");
    }
  }
  abstract initialize(): void;

  static getInstance() {}
}
