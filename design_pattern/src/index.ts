import IEGrimpan from "./IEGrimpan.js";
import ChromeGrimpan from "./ChromeGrimpan.js";
import AbstractGrimpanFactory from "./AbstractGrimpanFactory.js";
import { ChromeGrimpanFactory } from "./GrimpanFactory.js";

/**
 * Factory Method
 *
 * OCP 원칙에 부합한다.(기존 코드 건드리지 않고 추가 할 수 있음)
 * 단점: 코드의 복잡성이 높다
 */
// class ChromeGrimpanFactory extends AbstractGrimpanFactory {
//   static override createGrimpan() {
//     return ChromeGrimpan.getInstance();
//   }
// }
// class IEGrimpanFactory extends AbstractGrimpanFactory {
//   static override createGrimpan() {
//     return IEGrimpan.getInstance();
//   }
// }

// OCP 원칙에 부합한다.(기존 코드 건드리지 않고 추가 할 수 있음)
// class SafariGrimpanFactory extends ChromeGrimpanFactory {
//   static override createGrimpan() {
//     return SafariGrimpan.getInstance();
//   }
// }

function main() {
  // 팩토리 메서드 패턴
  // if문을 없앨 수 있다.
  const factory = ChromeGrimpanFactory;
  // const grimpan = new ChromeGrimpanFactory().createGrimpan();
  const grimpan = factory.createGrimpan();
  // const grimpan = IEGrimpanFactory.createGrimpan();
  // const grimpan = SafariGrimpanFactory.createGrimpan();

  // Abstract Factory
  const grimpanMenu = factory.createGrimpanMenu(grimpan);
  const grimpanHistory = factory.createGrimpanHistory(grimpan);
  grimpan.initialize();
  grimpanMenu.initialize();
  grimpanHistory.initialize();
}

/**
 *
 * Simple Factory(심플 팩토리 패턴)
 *
 * 주로 type을 받아 타입에 따라 다른 객체를 반환
 *
 * SRP 원칙 위반(변경의 이유가 두 가지다.)
 * -> 타입 판단을 통해 if/else 분기가 추가된다거나
 * -> 객체 생성 시 매개변수가 들어갈 수도 있다거나
 *
 * OCP 원칙 위반
 * -> 확장에는 열려있고, 변경에는 닫혀야하는 것이 원칙인데
 * 변경에 닫혀있지 않다.
 */
function grimpanFactory(type: string) {
  if (type === "ie") {
    return IEGrimpan.getInstance();
  } else if (type === "chrome") {
    return ChromeGrimpan.getInstance();
  }
  // 사파리가 추가된다면 이렇게 하나만 추가하면 되는 것이 심플 팩토리
  // 확장에 너무 열려있다는 단점
  // else if (type === "safari") {
  //   return SafariGrimpan.getInstance();
  // }
  else {
    throw new Error("일치하는 type이 없습니다");
  }
}

// 심플 팩토리
// function main() {
// grimpanFactory("ie");
// grimpanFactory("chrome");
// grimpanFactory("safari");
// }

main();
