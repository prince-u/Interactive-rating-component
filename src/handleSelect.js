import ClassListModifier from "./ClassListModifier";
const { addClass, removeClass, toggleClass, containsClass } = ClassListModifier;

function handleSelect(e, choice) {
  let selected = e.target;

  containsClass(selected, "active")
    ? localStorage.removeItem("choice", `${selected.id}`)
    : localStorage.setItem("choice", `${selected.id}`);

  if (containsClass(".pop-up", "active")) {
    removeClass(".pop-up", "active");
    addClass(".hover", "submit");
  }
  toggleClass(selected, "active");
  toggleClass(selected, "hover");
  containsClass(selected, "active")
    ? (choice.current = selected.id)
    : (choice.current = null);

  let allNumbers = Array.from(document.querySelectorAll(".number"));
  let unselectedNumbers = allNumbers.filter((number) => number !== e.target);
  unselectedNumbers.forEach((number) => {
    removeClass(number, "active");
  });
}
export default handleSelect;
