import { Link, useLocation } from "react-router-dom";
import Ratings from "./Ratings";
import { useRef, useEffect } from "react";
import img from "./images/icon-star.svg";
import ClassListModifier from "./ClassListModifier.js";
import popUpHandler from "./popUpHandler";

const { addClass, removeClass, containsClass } = ClassListModifier;

function Home() {
  const choice = useRef(null);

  const location = useLocation();

  useEffect(() => {
    if (localStorage.getItem("choice") != null) {
      let prevChoice = localStorage.getItem("choice");
      choice.current = prevChoice;
      document
        .querySelector(".number:nth-child(" + choice.current + ")")
        .classList.add("active");
    }
  }, [location]);
  function handleSubmit(e) {
    if (!choice.current) {
      e.preventDefault();
      popUpHandler();
    }
  }
  return (
    <div className="card">
      <div className="pop-up">Please provide a rating</div>
      <div className="star-icon">
        <img src={img} alt="" />
      </div>
      <div className="txt">
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>

      <div className="ratings">
        <Ratings choice={choice} num={5} />
      </div>
      <Link to="Thank you page">
        <button
          onClick={(e) => {
            handleSubmit(e);
          }}
          onMouseEnter={(e) => {
            if (containsClass(".pop-up", "active")) return;
            addClass(e.target, "hover");
          }}
          onMouseLeave={(e) => {
            removeClass(e.target, "hover");
          }}
        >
          submit
        </button>
      </Link>
    </div>
  );
}

export default Home;
