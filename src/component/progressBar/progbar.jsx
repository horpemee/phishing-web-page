import React from "react";
import "./progbar.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Progbar = () => {
  return (
    <div className="progress-bar">
      <CircularProgressbar value={50} text={"50%"} strokeWidth={5} />
    </div>
  );
};

export default Progbar;
