import ChromeGrimpan from "./ChromeGrimpan.js";
import IEGrimpan from "./IEGrimpan.js";
import { ChromeGrimpanMenu, IEGrimpanMenu } from "./GrimpanMenu.js";
import { ChromeGrimpanHistory, IEGrimpanHistory } from "./GrimpanHistory.js";
// Abstract Factory
class AbstractGrimpanFactory {
    static createGrimpan() {
        throw new Error("하위 클래스에서 구현 필요");
    }
    // createGrimpanMenu, createGrimpanHistory를 추가하는 행위 - Abstract Factory => OCP를 지키게 됨
    static createGrimpanMenu(grimpan, dom) {
        throw new Error("하위 클래스에서 구현 필요");
    }
    static createGrimpanHistory(grimpan) {
        throw new Error("하위 클래스에서 구현 필요");
    }
}
export class ChromeGrimpanFactory extends AbstractGrimpanFactory {
    static createGrimpan() {
        return ChromeGrimpan.getInstance();
    }
    static createGrimpanMenu(grimpan, dom) {
        return ChromeGrimpanMenu.getInstance(grimpan, dom);
    }
    static createGrimpanHistory(grimpan) {
        return ChromeGrimpanHistory.getInstance(grimpan);
    }
}
export class IEGrimpanFactory extends AbstractGrimpanFactory {
    static createGrimpan() {
        return IEGrimpan.getInstance();
    }
    static createGrimpanMenu(grimpan, dom) {
        return IEGrimpanMenu.getInstance(grimpan, dom);
    }
    static createGrimpanHistory(grimpan) {
        return IEGrimpanHistory.getInstance(grimpan);
    }
}
