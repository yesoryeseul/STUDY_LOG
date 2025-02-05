/**
 * 학습 시작 전 알고 갈 지식 TS/JS
 */

interface Obj {
  // 인터페이스에선 private, protected 같은 속성을 사용할 수 없다.
  // 인터페이스 자체가 public이기 때문!
  // private name: string
  name: string;
  getName(): string;
}

function main(obj: Obj) {}
// 아래 경우, interface 외 속성을 넣으면 에러
// main({
//   name: "kei",
//   abc: 123,
// });

// 그러나 외부 변수로 빼면 에러가 나지 않는다.
const obj = {
  name: "kei",
  abc: 123,
  getName() {
    return this.name;
  },
};

main(obj);

// -> ts에서 객체 자체를 직접 넣으면 인터페이스에 적혀 있지 않은 값을 넣으면 에러가 나지만, 변수로 넣으면 에러가 나지 않는다.
// => 객체 리터럴 그 자체는 에러가 나지만, 변수를 넣으면 에러가 발생하지 않는다.

// 인터페이스에서 private, protected를 쓰고 싶다면? 추상 클래스 사용
abstract class AC {
  // private name: string;
  public hello: string;
  constructor(name: string, hello: string) {
    // this.name = name;
    this.hello = hello;
  }
}

interface AC2 {
  hello: string;
}

// 같은 거!
abstract class AC3 {
  constructor(public name: string) {
    this.name = name;
  }
}

const ac2: AC = {
  hello: "world",
};

function main2(obj: AC) {}
main2({
  hello: "kei",
});

// => ts에서 객체가 클래스든, 객체 리터럴이든 상관없이 둘의 모양이 같으면 같은 타입으로 친다(구조적 타이핑, 덕 타이핑)
// => 위 코드에서 AC 클래스와 AC2 인터페이스는 같은 타입으로 침!
