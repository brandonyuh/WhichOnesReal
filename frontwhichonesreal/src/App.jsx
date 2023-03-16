import axios from "axios";
import { useState, useEffect } from "react";

const API_URL = "http://localhost:9090/questions";

function App() {
  const [images, setImages] = useState("");
  useEffect(() => {
    getQuestions();
  }, []);

  function getQuestions() {
    axios.get(`${API_URL}`).then((response) => {
      console.log(response);
    });
  }

  function getQuestion() {
    axios.get(`${API_URL}/:id`).then((response) => {
      console.log(response);
    });
  }

  return <div></div>;
}

export default App;
