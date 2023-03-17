import "./AdminVote.scss";
import { useEffect, useState } from "react";
import axios from "axios";
function AdminVote() {
  const voteURL = "http://10.1.230.212:9090/vote/";
  const millisInterval = 1 * 1000;
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      axios.get(`${voteURL}left`).then((response) => {
        setLeft(response.data);
      });
      axios.get(`${voteURL}right`).then((response) => {
        setRight(response.data);
      });
    }, millisInterval);

    return () => clearInterval(interval);
  }, [millisInterval]);

  const resetNumbers = () => {
    axios.delete(`${voteURL}left`);
    axios.delete(`${voteURL}right`);
    setLeft(0);
    setRight(0);
  };
  return (
    <>
      <h1>Results</h1>
      <span>Left:{left}</span> <span>Right:{right}</span>
      <div>
        <button onClick={resetNumbers}>Reset</button>
      </div>
    </>
  );
}

export default AdminVote;
