import React, { useState } from "react";
import "./App.css";
import AdviceGenLine from "./Components/AdviceGenLine/AdviceGenLine";
import AdviceGenButton from "./Components/AdviceGenButton/AdviceGenButton";

const App = () => {
  const [advice, setAdvice] = useState("");
  const [adviceId, setAdviceId] = useState("");

  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();

      setAdvice(data.slip.advice);
      setAdviceId(data.slip.id);
    } catch (error) {
      console.error("Failed to fetch advice:", error);
    }
  };
  return (
    <div className="advice-container">
      <p className="advice-id">ADVICE #{adviceId || "..."}</p>
      <q className="advice-text">
        {advice || "Click the dice to generate an advice!"}
      </q>
      <p>
        <AdviceGenLine />
      </p>
      <AdviceGenButton onClick={fetchAdvice} />
    </div>
  );
};

export default App;
