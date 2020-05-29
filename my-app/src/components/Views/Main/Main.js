import React, { Component } from "react";
import "./Main.css";
import MainPhoto from "../../../images/women_1920.jpg";
import Technology from "./Technology/Technology";
import { getAllTechnologies } from "../../Services/GetTechnology/GetTechnilogy";

class Main extends Component {
  state = {
    technologies: [],
  };

  getTechnologies = () => {
    let allTechnologies = getAllTechnologies();
    this.setState({
      technologies: allTechnologies,
    });
  };

  componentDidMount() {
    this.getTechnologies();
  }
  render() {
    const allTechnologies = this.state.technologies.map((tech) => {
      return <Technology key={tech.id} name={tech.name}></Technology>;
    });

    return (
      <div className="mainContainer">
        <main>
          <img className="mainPhoto" src={MainPhoto} alt="women" />
          <span className="right">
            <div className="firstRight">Hi, I am Martyna. </div>
            <div className="secondRight">I am a front-end developer.</div>
          </span>
        </main>
        <section className="aboutMe">
          <div className="mainDiv">
            <div className="aboutMeMain">About me</div>
            <div className="aboutMeText">
              <div>
                Everyday I step forward to became a better front-end developer.
              </div>
              <div>
                My favourite Java Script framework is React.js and that is what
                I usually use in my projects. I aslo learn C# and Python and I
                would like to use them in the future.
              </div>
              <div>In my free time I learn foreign languages and sing.</div>
              <div>
                Feel free to check my portfolio of some of my projects and visit
                my GitHub profile to see more.
              </div>
            </div>
          </div>
          <div className="mainDiv" className="mainDiv">
            <div className="aboutMeMain">Technologies</div>
            <div className="technologiesWrapper">{allTechnologies}</div>
          </div>
        </section>
      </div>
    );
  }
}

export default Main;
