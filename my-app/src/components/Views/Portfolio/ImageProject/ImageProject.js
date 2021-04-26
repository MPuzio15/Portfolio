import React from "react";
import "./ImageProject.css";

function ImageProject(props) {
  let img1 = props.pictures[0];
  let img2 = props.pictures[1];
  let img3 = props.pictures[2];

  return (
    <div className="projectContainer">
      <div className="title">{props.name}</div>
      <a className='aMain' href={props.href}>
        <img src={props.picture} alt="project" />
      </a>
      <div className="techsIcons">
        <img key="img1" src={img1} alt="photo" />
        <img key="img2" src={img2} alt="photo" />
        <img key="img3" src={img3} alt="photo" />
      </div>
    </div>
  );
}

export default ImageProject;
