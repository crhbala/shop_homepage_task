import React, { useState } from "react";

function Review(props) {

  const [rating, setRating] = useState(0);
  
 const fixRating = (event) => {

      setRating(event.target.value)

    let ratingBtns = event.target.parentElement.childNodes;

    ratingBtns.forEach((btn) => {
      if (btn.value <= rating) {
        btn.className = "bi-star-fill btn border-0 p-0 m-0 text-warning";
      } else {
        btn.className = "bi-star  btn border-0 p-0 m-0 text-warning";
      }
    });
  };

 const getRatings = () => {
    return (
      <div
        className="d-flex justify-content-center small text-warning mb-2 "
        id="ratingBox"
      >
        <button
          className="bi-star rating btn border-0 p-0 m-0 text-warning"
          onMouseOver={fixRating}
          onClick={fixRating}
          value={1}
        ></button>
        <button
          className="bi-star rating btn border-0 p-0 m-0 text-warning"
          onMouseOver={fixRating}
          onClick={fixRating}
          value={2}
        ></button>
        <button
          className="bi-star rating btn border-0 p-0 m-0 text-warning"
          onMouseOver={fixRating}
          onClick={fixRating}
          value={3}
        ></button>
        <button
          className="bi-star rating btn border-0 p-0 m-0 text-warning"
          onMouseOver={fixRating}
          onClick={fixRating}
          value={4}
        ></button>
        <button
          className="bi-star rating btn border-0 p-0 m-0 text-warning"
          onMouseOver={fixRating}
          value={5}
          onClick={fixRating}
        ></button>
      </div>
    );
  };
    const { product } = props;

    return (
      <div>
        <div
          className="d-flex justify-content-center small text-warning mb-2 "
          id="ratingBox"
        >
          {product.productReview ? getRatings() : ""}
        </div>
      </div>
    );
  }
export default Review;
