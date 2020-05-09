import React from "react";
import "./Main.css";
import MainPhoto from "../../images/women_1920.jpg";

function Main() {
  return (
    <div>
      <main>
        <img className="mainPhoto" src={MainPhoto} alt="women" />
        <span className="right">
          <div className="firstRight">Hi, I am Martyna. </div>
          <div className="secondRight">I am a front-end developer.</div>
        </span>
      </main>
    </div>
  );
}

export default Main;
