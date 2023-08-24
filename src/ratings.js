import handleSelect from "./handleSelect";
import handleHover from "./handleHover";

const Ratings = ({ num, choice }) => {
  let ratings = [];
  for (let i = 1; i < num + 1; i++) {
    let item = (
      <div
        className="number"
        onMouseEnter={(e) => handleHover("entering", e)}
        onMouseLeave={(e) => handleHover("leaving", e)}
        onClick={(e) => {
          handleSelect(e, choice);
        }}
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
