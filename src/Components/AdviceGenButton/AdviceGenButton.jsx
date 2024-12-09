import React from "react";
import "./AdviceGenButton.css";
import image from "../../assets/images/icon-dice.svg";

const AdviceGenButton = ({ onClick }) => {
  return (
    <div className="button" onClick={onClick}>
      <img src={image} alt="GEnerate Advice" />
    </div>
  );
};

export default AdviceGenButton;
