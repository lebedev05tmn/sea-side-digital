import AbstractView from "../view/abstract";

export const RenderPosition = {
  AFTERBEGIN: "afterbegin",
  BEFOREEND: "beforeend",
  AFTEREND: "afterend",
};

export const renderElement = (container, element, place) => {
  if (element instanceof AbstractView) {
    element = element.getElement();
  }
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
    case RenderPosition.AFTEREND:
      container.after(element);
  }
};

export const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

export const createElement = template => {
  const newElement = document.createElement("div");
  newElement.innerHTML = template;

  return newElement.firstChild;
};
