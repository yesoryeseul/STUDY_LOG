// Builder Pattern
class GrimpanMenuElementBuilder {
    btn;
    constructor() { }
    build() {
        return this.btn;
    }
}
export class GrimpanMenuElement {
    menu;
    name;
    constructor(menu, name) {
        this.menu = menu;
        this.name = name;
    }
}
export class GrimpanMenuInput extends GrimpanMenuElement {
    onChange;
    value;
    constructor(menu, name, onChange, value) {
        super(menu, name);
        this.onChange = onChange;
        this.value = value;
    }
    draw() {
        const btn = document.createElement("input");
        btn.title = this.name;
        btn.type = "color";
        if (this.onChange) {
            btn.addEventListener("change", this.onChange.bind(this));
        }
        this.menu.dom.append(btn);
    }
    static Builder = class GrimpanMenuInputBuilder extends GrimpanMenuElementBuilder {
        btn;
        constructor(menu, name) {
            super();
            this.btn = new GrimpanMenuInput(menu, name);
        }
        setOnChange(onChange) {
            this.btn.onChange = onChange;
            return this;
        }
        setValue(value) {
            this.btn.value = value;
            return this;
        }
    };
}
export class GrimpanMenuBtn extends GrimpanMenuElement {
    onClick;
    active;
    constructor(menu, name, onClick, active) {
        super(menu, name);
        this.onClick = onClick;
        this.active = active;
    }
    draw() {
        const btn = document.createElement("button");
        btn.textContent = this.name;
        if (this.onClick) {
            btn.addEventListener("click", this.onClick.bind(this));
        }
        this.menu.dom.append(btn);
    }
    static Builder = class GrimpanMenuBtnBuilder extends GrimpanMenuElementBuilder {
        btn;
        constructor(menu, name) {
            super();
            this.btn = new GrimpanMenuBtn(menu, name);
        }
        setOnClick(onClick) {
            this.btn.onClick = onClick;
            return this;
        }
        setActive(active) {
            this.btn.active = active;
            return this;
        }
    };
}
// 빌더 교체 방식
// class GrimpanMenuBtn {
//   name?: string;
//   type?: string;
//   onClick?: () => void;
//   onChange?: () => void;
//   active?: boolean;
//   value?: string | number;
//   constructor(
//     name?: string,
//     type?: string,
//     onClick?: () => void,
//     onChange?: () => void,
//     active?: boolean,
//     value?: string | number
//   ) {
//     this.name = name;
//     this.type = type;
//     this.onClick = onClick;
//     this.onChange = onChange;
//     this.active = active;
//     this.value = value;
//   }
// }
// interface GrimpanMenuBuilder {
//   setName(name: string): this;
//   setType(type: string): this;
//   setOnClick(onClick: () => void): this;
//   setOnChange(onChange: () => void): this;
//   setActive(active: boolean): this;
//   setValue(value: string | number): this;
//   build(): GrimpanMenuBtn;
// }
// class ChromGrimpanMenuBtnBuilder implements GrimpanMenuBuilder {
//   btn: GrimpanMenuBtn;
//   constructor() {
//     this.btn = new GrimpanMenuBtn();
//   }
//   setName(name: string) {
//     this.btn.name = name;
//     return this;
//   }
//   setType(type: string) {
//     this.btn.type = type;
//     return this;
//   }
//   setOnClick(onClick: () => void) {
//     this.btn.onClick = onClick;
//     return this;
//   }
//   setOnChange(onChange: () => void) {
//     this.btn.onChange = onChange;
//     return this;
//   }
//   setActive(active: boolean) {
//     this.btn.active = active;
//     return this;
//   }
//   setValue(value: string | number) {
//     this.btn.value = value;
//     return this;
//   }
//   build() {
//     return this.btn;
//   }
// }
// class IEGrimpanMenuBtnBuilder implements GrimpanMenuBuilder {
//   btn: GrimpanMenuBtn;
//   constructor() {
//     this.btn = new GrimpanMenuBtn();
//   }
//   setName(name: string) {
//     this.btn.name = name;
//     return this;
//   }
//   setType(type: string) {
//     this.btn.type = type;
//     return this;
//   }
//   setOnClick(onClick: () => void) {
//     this.btn.onClick = onClick;
//     return this;
//   }
//   setOnChange(onChange: () => void) {
//     this.btn.onChange = onChange;
//     return this;
//   }
//   setActive(active: boolean) {
//     this.btn.active = active;
//     return this;
//   }
//   setValue(value: string | number) {
//     this.btn.value = value;
//     return this;
//   }
//   build() {
//     return this.btn;
//   }
// }
// export class GrimpanMenuBtnDirector {
//   static createBackBtn(builder: GrimpanMenuBuilder) {
//     const backBtnBuilder = builder
//       .setName("뒤로")
//       .setType("back")
//       .setOnClick(() => {})
//       .setActive(false);
//     return backBtnBuilder;
//   }
//   static createForwardBtn(builder: GrimpanMenuBuilder) {
//     const forwardBtnBuilder = builder
//       .setName("앞으로")
//       .setType("forward")
//       .setOnClick(() => {})
//       .setActive(false);
//     return forwardBtnBuilder;
//   }
// }
// GrimpanMenuBtnDirector.createBackBtn(new ChromGrimpanMenuBtnBuilder());
// GrimpanMenuBtnDirector.createForwardBtn(new IEGrimpanMenuBtnBuilder());
