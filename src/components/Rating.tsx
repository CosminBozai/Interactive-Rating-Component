import { ReactComponent as StarIcon } from "../assets/icon-star.svg";
import { ReactComponent as CellphoneIcon } from "../assets/illustration-thank-you.svg";
import { useState } from "react";
import { TbArrowBackUp } from "react-icons/tb";
import "./Rating.scss";

export default function Rating() {
  const [rating, setRating] = useState<number>(0);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const changeRating = (rating: number) => setRating(rating);

  return (
    <div className="main-container">
      <div className={`rating-container ${submitted ? "display-none" : ""}`}>
        <div className="icon-wrapper">
          <StarIcon className="star-icon" />
        </div>
        <h1>How did we do?</h1>
        <p>
          Please let us know we did with your support request. All feedback is
          appreciated to help us improve our offering!
        </p>
        <div className="rating-wrapper">
          <div
            onClick={() => changeRating(1)}
            className={`rating ${rating === 1 ? "selected" : ""}`}
          >
            1
          </div>
          <div
            onClick={() => changeRating(2)}
            className={`rating ${rating === 2 ? "selected" : ""}`}
          >
            2
          </div>
          <div
            onClick={() => changeRating(3)}
            className={`rating ${rating === 3 ? "selected" : ""}`}
          >
            3
          </div>
          <div
            onClick={() => changeRating(4)}
            className={`rating ${rating === 4 ? "selected" : ""}`}
          >
            4
          </div>
          <div
            onClick={() => changeRating(5)}
            className={`rating ${rating === 5 ? "selected" : ""}`}
          >
            5
          </div>
        </div>
        <button
          onClick={() => setSubmitted(true)}
          disabled={rating === 0 ? true : false}
          className="submit-btn"
        >
          Submit
        </button>
      </div>
      {/* Thank you message  */}
      <div className={`thankyou-container ${submitted ? "" : "display-none"}`}>
        <CellphoneIcon />
        <div className="user-rating">You selected {rating} out of 5</div>
        <h1>Thank you!</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="back-button"
          data-testid="back-button"
        >
          <TbArrowBackUp color="white" className="back-icon" />
        </button>
      </div>
    </div>
  );
}
