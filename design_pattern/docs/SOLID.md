# SOLID 원칙이란?

> 객체 지향 프로그래밍 및 설계의 다섯 가지 기본 원칙.

## SRP - 단일 책임 원칙 (Single responsibility principle)

- 정의: 한 클래스는 하나의 책임만 가져야 한다.
- `변경의 이유가 하나여야 한다`로 해석하면 이해가 쉽다.

> 아래 코드를 보자. main() 함수는 함수 a, b, c를 다 불러 SRP에 어긋났다고 할 수 있나?

- 아니다. main() 함수는 책임 3가지를 수행하는 것이 아니라 일련의 프로세스를 관장하는 함수이다.(a 호출 > b 호출 > c 호출을 순서대로 하는 함수)
- main()의 경우 호출 순서를 변경해야하는 이유만 있다면 SRP 원칙을 지키게 되는 것이다.

```js
function a() {}
function b() {}
function c() {}

function main() {
  a();
  b();
  c();
}
```

단, 처음부터 단일 책임 원칙을 지키려하기 보다는 이를 위반하는 함수가 중복적으로 나올 때 리팩토링을 하면 좋다. 처음부터 원칙을 지키려하면 생산성이 떨어지기 때문!

---

## OCP - 개방-폐쇄 원칙 (Open/closed principle)

- 정의: “소프트웨어 요소는 확장에는 열려 있으나 변경에는 닫혀 있어야 한다.”
- ex) factory method 패턴

> 예를 들어 아래와 같은 코드가 있다고 가정해보자.

```js
function main(type) {
  if (type === "a") {
    doA();
  } else if (type === "b") {
    doB();
  } else if (type === "c") {
    doC();
  } else if (type === "d") {
    doD();
  } else if (type === "e") {
    doE();
  }
}
```

-> 여기서 보통 doF()가 필요하다면 else if에 조건을 추가해서 똑같이 만들어줄 것이고 필요하다면 계속 추가를 할 것인데 위 코드가 바로 OCP를 위반한 코드이다.

### 확장에는 열려있되, 변경에는 닫혀있어야 하는 것이 OCP 원칙의 컨셉이다!

> 무언가를 추가하려고 기존 코드를 변경한다면 OCP를 위반한 것이다.

#### 리팩토링 해보자!

```ts
interface Doable {
  do(): void;
}
function main(type: Doable) {
  type.do();
}

const a = { do() {} };
const b = { do() {} };
const c = { do() {} };
const d = { do() {} };
const e = { do() {} };
// 여기서 할당된 각 객체는 싱글턴으로 볼 수 있다(고유한 것임)
const f = { do() {} }; // 추가된 객체(코드)

main(a);
```

위 코드는 기존 코드(main 함수, interface)는 변경된 것이 없으며(폐쇄), 새로운 객체는 추가할 수 있다(개방)
