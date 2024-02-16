import { createElement } from "../utils/render";

export default class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error("Can't instantiate Abstract, only concrete one.");
    }
    this._element = null;
  }

  getTemplate() {
    throw new Error("Abstract method not implemented: getTemplate");
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
