/* <inline-circle> カスタム要素に適当な属性を追加しなさい (例: border-color)。
作成した <inline-circle> を HTML で読み込んで表示しなさい。
出題範囲: 15.6 */

customElements.define(
  "inline-circle",
  class InlineCircle extends HTMLElement {
    connectedCallback() {
      this.style.display = "inline-block";
      this.style.borderRadius = "50%";
      this.style.border = "solid black 1px";
      this.style.transform = "translateY(10%)";

      if (!this.style.width) {
        this.style.width = "0.8em";
        this.style.height = "0.8em";
      }
    }

    static get observedAttributes() {
      return ["diameter", "color", "border-color"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
      switch (name) {
        case "diameter":
          this.style.width = newValue;
          this.style.height = newValue;
          break;

        case "color":
          this.style.backgroundColor = newValue;
          break;

        case "border-color":
          this.style.border = newValue;
          break;
      }
    }

    get diameter() {
      return this.getAttribute("diameter");
    }
    set diameter(diameter) {
      this.setAttribute("diameter", diameter);
    }
    get color() {
      return this.getAttribute("color");
    }
    set color(color) {
      this.setAttribute("color", color);
    }
    get borderColor() {
      return this.getAttribute("border-color");
    }
    set borderColor(borderColor) {
      this.setAttribute("border-color", borderColor);
    }
  }
);
