import ClassListModifier from "./ClassListModifier";
const { removeClass, addClass } = ClassListModifier;

function handleHover(mouseState, e) {
  let hovered = e.target;
  if (mouseState === "entering") {
    if (hovered.classList.contains("active")) return;
    addClass(hovered, "hover");
  } else if (mouseState === "leaving") {
    removeClass(hovered, "hover");
  }
}
export default handleHover;
