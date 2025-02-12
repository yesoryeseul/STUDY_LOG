// Factory Method, 추상체만 구현한다고 생각!
// 추상체
export default class Grimpan {
    // abstract 속성이 아닌 경우(ex. private)도 사용 가능
    constructor(canvas) {
        if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
            throw new Error("엘리먼트를 입력하세요");
        }
    }
    static getInstance() { }
}
