import "./ClientVote.scss";
import { useState } from "react";
import axios from "axios";
function ClientVote() {
  const voteURL = "http://10.1.230.212:9090/vote/";
  const [vote, setVote] = useState(false);
  const handleLeftVote = (e) => {
    setVote(true);
    setTimeout(function () {
      setVote(false);
    }, 1000);
    axios.put(`${voteURL}left`);
  };
  const handleRightVote = (e) => {
    setVote(true);
    setTimeout(function () {
      setVote(false);
    }, 1000);
    axios.put(`${voteURL}right`);
  };

  return (
    <>
      <h1>Vote!</h1>
      <h2 className={vote ? "vote__text vote__text--show" : "vote__text"}>Thanks for voting!</h2>
      <div className="vote__container">
        <button className="vote__button" onClick={handleLeftVote}>
          Left
        </button>
        <button className="vote__button" onClick={handleRightVote}>
          Right
        </button>
      </div>
    </>
  );
}

export default ClientVote;
