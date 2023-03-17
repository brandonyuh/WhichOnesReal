import React, { useState, useEffect } from "react";
import "./Cards.scss";
import axios from "axios";

function Cards() {
  let [score, setScore] = useState(0);
  let [verdict, setVerdict] = useState("");
  let [prop, setProp] = useState(null)

  function getQuestions() {
    axios.get("http://localhost:9090/questions").then((res) => {
     setProp(res.data)
    });
  }


  let counter = 0;

  getQuestions()
  
  function handleNext() {
    setVerdict("");
    counter = counter + 1;
    return prop[counter];
  }


  useEffect(() => {
    const score = parseInt(localStorage.getItem("score"));
    if (score) {
      setScore(score);
      setVerdict("");
    }
  }, []);


  function handleRes() {
    setScore(0);
    setVerdict("");
    localStorage.removeItem("score");
  }
  function handleClick(cardClicked) {
    if (
      (prop.isleftcorrect === true && cardClicked === "left") ||
      (prop.isleftcorrect === false && cardClicked === "right")
    ) {
      const newScore = score + 1;
      setScore(newScore);
      setVerdict(":white_check_mark:");
      localStorage.setItem("score", newScore);
      console.log(verdict);
      return score;
    } else {
      setVerdict(":x:");
      console.log(verdict);
      return;
    }
  }
  return (
    prop?
    <>
      <div className="button__container">
        <button className="button" onClick={handleRes}>
          Restart
        </button>
      </div>
      <div className="card__container">
        <div className="card" id="leftcard" onClick={() => handleClick("left")}>
          <img className="card__img" src={prop[counter].lefturl} alt="" />
        </div>
        <div className="score__container">
          <div className="card-score">Score: {score}</div>
          <div className="verdict">{verdict}</div>
        </div>
        <div
          className="card"
          id="rightcard"
          onClick={() => handleClick("right")}
        >
          <img className="card__img" src={prop[counter].righturl} alt="" />
        </div>
      </div>
      <div className="button__container">
        <button className="button" onClick={handleNext}>
          NEXT
        </button>
      </div>
    </>
    :""
  );
}
export default Cards;
