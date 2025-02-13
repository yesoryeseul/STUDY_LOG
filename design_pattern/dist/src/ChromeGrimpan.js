import Grimpan from "./AbstractGrimpan.js";
// 구현체
class ChromeGrimpan extends Grimpan {
    static instance;
    initialize() { }
    static getInstance() {
        if (!this.instance) {
            this.instance = new ChromeGrimpan(document.querySelector("canvas"));
        }
        return this.instance;
    }
}
export default ChromeGrimpan;
