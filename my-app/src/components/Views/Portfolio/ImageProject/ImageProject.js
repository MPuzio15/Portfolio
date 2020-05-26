import React, { Component } from "react";
import "./ImageProject.css";

function ImageProject(props) {
  let img1 = props.pictures[0];
  let img2 = props.pictures[1];
  let img3 = props.pictures[2];

  return (
    <div className="projectContainer">
      <div className="title">{props.name}</div>
      <div className="mainImg">
        <img src={props.picture} alt="photo" />
      </div>
      <div className="techsIcons">
        <div>
          <img key="img1" src={img1} alt="photo" />
        </div>
        <div>
          <img key="img2" src={img2} alt="photo" />
        </div>
        <div>
          <img key="img3" src={img3} alt="photo" />
        </div>
      </div>
    </div>
  );
}

export default ImageProject;
