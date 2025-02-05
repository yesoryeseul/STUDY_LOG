import Grimpan from "./grimpan.js";
console.log(Grimpan.getInstance() === Grimpan.getInstance()); // true
// 싱글턴은 강결합되어있다는 단점 또한 있다.
// 현재 main함수(index.ts)와 Grimpan은 강결합
// 테스트하기도 어렵다
function main() {
    Grimpan.getInstance().initialize();
}
main();
// 약한 결합 예시
function main2(instance) {
    instance.initialize();
}
main2(Grimpan.getInstance());
// 테스트는 이런식으로 해야하기 때문..
// main2(Test.getInstance());
