import AbstractView from "./abstract";

const wrapperBlockTemplate = () => {
  return `<form class="wrapper"></form>`;
};

export default class WrapperBlockView extends AbstractView {
  getTemplate() {
    return wrapperBlockTemplate();
  }
}
