import React from "react";
import "./App.css";
import AdviceGenLine from "./Components/AdviceGenLine/AdviceGenLine";
import AdviceGenButton from "./Components/AdviceGenButton/AdviceGenButton";

const App = () => {
  return (
    <div className="advice-container">
      <p className="advice-id">ADVICE #117</p>
      <q className="advice-text">
        It is easy to sit up and take <br></br>notice, what's difficult is
        getting <br></br>up and taking action.
      </q>
      <p>
        <AdviceGenLine />
      </p>
      <AdviceGenButton />
    </div>
  );
};

export default App;
