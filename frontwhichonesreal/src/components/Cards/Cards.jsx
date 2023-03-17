import React from "react";
import fake from "../../assets/images/amazon-fake.webp";
import real from "../../assets/images/amazon-real.webp";
import "./Cards.scss";

function Cards() {
  return (
    <div className="card__container">
      <div className="card-right">
        <p className="left-verdict" id="left-verdict">
          ✅
        </p>
        <img className="card__img" src={real} alt="" />
      </div>
      <div className="card-score">Score: </div>
      <div className="card-wrong">
        <p className="right-verdict" id="right-verdict">
          ❌
        </p>
        <img className="card__img" src={fake} alt="" />
      </div>
    </div>
  );
}

export default Cards;
