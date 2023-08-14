const Ratings = ({ num, updateState }) => {
  function handleClick(e) {
    let selected = e.target;
    selected.classList.toggle("active");
    selected.classList.toggle("hover");
    selected.classList.contains("active")
      ? updateState(selected.id)
      : updateState(null);

    let allNumbers = Array.from(document.querySelectorAll(".number"));
    let unselectedNumbers = allNumbers.filter((number) => number !== e.target);
    unselectedNumbers.forEach((number) => {
      number.classList.remove("active");
    });
  }
  function handleHover(mouseState, e) {
    let hovered = e.target;
    if (mouseState === "entering") {
      if (hovered.classList.contains("active")) return;
      hovered.classList.add("hover");
    } else if (mouseState === "leaving") {
      hovered.classList.remove("hover");
    }
  }
  let ratings = [];
  for (let i = 1; i < num + 1; i++) {
    let item = (
      <div
        className="number"
        onMouseEnter={(e) => handleHover("entering", e)}
        onMouseLeave={(e) => handleHover("leaving", e)}
        onClick={handleClick}
        key={i}
        id={i}
      >
        {i}
      </div>
    );
    ratings.push(item);
  }
  return <>{ratings}</>;
};

export default Ratings;
