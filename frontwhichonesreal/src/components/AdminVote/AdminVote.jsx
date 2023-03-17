import "./AdminVote.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function AdminVote() {
  const voteURL = "http://10.1.230.212:9090/vote/";
  const millisInterval = 1 * 1000;
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  const data = {
    datasets: [
      {
        label: "Left",
        data: { left },
        backgroundColor: "aqua",
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "Right",
        data: { right },
        backgroundColor: "red",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };
  const options = {};

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
      <div className="container">
        <h1 className="title">Results</h1>
        <span className="span">Left: {left}</span> <span className="span">Right: {right}</span>
        <div>
          <button className="btn" onClick={resetNumbers}>
            Reset
          </button>
        </div>
      </div>
      <div className="vote__chart">
        <Bar className="bar-chart" style={{ padding: "20px", width: "100%" }} data={data} options={options}></Bar>
      </div>
    </>
  );
}

export default AdminVote;
