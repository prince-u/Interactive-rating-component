import img from "./images/illustration-thank-you.svg";

const ThankYouPage = ({ rating }) => {
  return (
    <div className="card thank-you-card">
      <div className="phone-icon">
        <img src={img} alt="" />
      </div>
      <div className="review">you selected {rating} out of 5</div>
      <div className="txt">
        <h1>Thank you!</h1>
        <p>
          We appreciate you taking the time to give us a rating. If you ever
          need more support don't hesitate to get in touch!
        </p>
      </div>
    </div>
  );
};

export default ThankYouPage;
