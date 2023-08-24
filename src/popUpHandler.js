import ClassListModifier from "./ClassListModifier.js";
const { addClass, removeClass, containsClass } = ClassListModifier;

let timer;
function popUpHandler() {
  if (containsClass(".pop-up", "active")) {
    clearTimeout(timer);
    addClass(".pop-up", "active");
    removeClass("button", "hover");
  } else {
    addClass(".pop-up", "active");
    removeClass("button", "hover");
  }
  timer = setTimeout(() => {
    if (document.querySelector(".pop-up")) {
      removeClass(".pop-up", "active");
      addClass("button", "hover");
    } else {
      return;
    }
  }, 3000);
}

export default popUpHandler;
