const ClassListModifier = {
  addClass(selector, selectorClass) {
    if (typeof selector === "string") {
      document.querySelector(selector).classList.add(selectorClass);
    } else if (selector instanceof HTMLElement) {
      selector.classList.add(selectorClass);
    } else {
      console.log("invalid argument(s)");
    }
  },
  removeClass(selector, selectorClass) {
    if (typeof selector === "string") {
      document.querySelector(selector).classList.remove(selectorClass);
    } else if (selector instanceof HTMLElement) {
      selector.classList.remove(selectorClass);
    } else {
      console.log("invalid argument(s)");
    }
  },
  toggleClass(selector, selectorClass) {
    if (typeof selector === "string") {
      document.querySelector(selector).classList.toggle(selectorClass);
    } else if (selector instanceof HTMLElement) {
      selector.classList.toggle(selectorClass);
    } else {
      console.log("invalid argument(s)");
    }
  },
  containsClass(selector, selectorClass) {
    if (typeof selector === "string") {
      return document.querySelector(selector).classList.contains(selectorClass);
    } else if (selector instanceof HTMLElement) {
      return selector.classList.contains(selectorClass);
    } else {
      console.log("invalid argument(s)");
    }
  },
};

export default ClassListModifier;
