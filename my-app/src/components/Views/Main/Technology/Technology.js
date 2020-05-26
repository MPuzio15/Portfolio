import React from "react";
import "./Technology.css";

const Technology = (props) => {
  let getColor = () => {
    const colors = [
      "#d80505",
      "#0859db",
      "#e90a8c",
      "#EEA322",
      "#015B4A",
      "#904EBA",
      "#6469CB",
      "#820060",
    ];
    let randomColor = Math.ceil(Math.random() * colors.length - 1);
    return colors[randomColor];
  };

  return (
    <div
      className="singleTech"
      style={({ borderColor: getColor() }, { color: getColor() })}
    >
      {props.name}
    </div>
  );
};

export default Technology;
