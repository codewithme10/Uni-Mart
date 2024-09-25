import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
// CSS
import "../style/Cover.scss";

function Cover() {
  return (
    <React.StrictMode>
      <AwesomeSlider animation="cubeAnimation">
        <div data-src="./images/cover4.jpeg" />
        <div data-src="./images/cover2.jpeg" />
        <div data-src="./images/cover3.jpeg" />
      </AwesomeSlider>
    </React.StrictMode>
  );
}

export default Cover;
