import React, { Component } from "react";
import "./Main.css";
import MainPhoto from "../../../assets/images/women_1920.jpg";
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
            <div className="secondRight">I am a Frontend Developer.</div>
          </span>
        </main>
        <section className="aboutMe">
          <div className="mainDiv">
            <div className="aboutMeMain">About me</div>
            <div className="aboutMeText">
              <div>Everyday I step forward to became a better developer.</div>
              <div>
                Currently I am working using React Native framework, which
                enables creating the mobile apps for both Android and IOS
                operating system. I also started using Type Script in my
                projects and it became my best friend and a life saver.
              </div>
              <div>
                In my free time I learn foreign languages, travel and read.
              </div>
              <div>
                Feel free to check my portfolio of some of my projects and visit
                my GitHub profile to see more.
              </div>
            </div>
          </div>
          <div className="mainDiv">
            <div className="aboutMeMain">Technologies</div>
            <div className="technologiesWrapper">{allTechnologies}</div>
          </div>
        </section>
      </div>
    );
  }
}

export default Main;
