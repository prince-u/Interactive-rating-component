import { Link } from "react-router-dom";
import Ratings from "./ratings";
import { useState } from "react";
import img from "./images/icon-star.svg";
import logger from "./new.js";

function Home({ handleChoice }) {
  logger("Hello world");
  const [State, setState] = useState(null);
  function updateState(id) {
    setState(id);
  }
  function addClass(element, elementClass) {
    document.querySelector(element).classList.add(elementClass);
  }
  function removeClass(element, elementClass) {
    document.querySelector(element).classList.remove(elementClass);
  }

  let timer;
  function handlePopUp() {
    if (document.querySelector(".pop-up").classList.contains("active")) {
      clearTimeout(timer);
    } else {
      addClass(".pop-up", "active");
      removeClass("button", "hover");
    }
    timer = setTimeout(() => {
      removeClass(".pop-up", "active");
      addClass("button", "hover");
      console.log("setTimeout called");
    }, 3000);
  }
  function handleSubmit(e) {
    if (State) {
      handleChoice(State);
      setState(null);
    } else {
      e.preventDefault();
      handlePopUp(e);
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
        <Ratings updateState={updateState} num={5} />
      </div>
      <Link to="Thank you page">
        <button
          onClick={(e) => {
            handleSubmit(e);
          }}
          onMouseEnter={(e) => {
            if (document.querySelector(".pop-up").classList.contains("active"))
              return;
            e.target.classList.add("hover");
          }}
          onMouseLeave={(e) => {
            e.target.classList.remove("hover");
          }}
        >
          submit
        </button>
      </Link>
    </div>
  );
}

export default Home;
