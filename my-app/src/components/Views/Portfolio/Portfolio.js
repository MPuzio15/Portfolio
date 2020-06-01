import React, { Component } from "react";
import "./Portfolio.css";
import ImageProject from "./ImageProject/ImageProject";
import { getAllProjects } from "../../Services/GetProjects/GetProjects";

class Porfolio extends Component {
  state = {
    projects: [],
  };
  getData = () => {
    let allProjects = getAllProjects();
    this.setState({
      projects: allProjects,
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    if (this.state.projects.length === 0) {
      return <div>Loading ... </div>;
    }

    const allProjects = this.state.projects.map((project) => {
      return (
        <ImageProject
          key={project.id}
          name={project.name}
          picture={project.mainImg}
          pictures={project.otherImgs}
          href={project.href}
        ></ImageProject>
      );
    });
    return <article className="projects_wrapper">{allProjects}</article>;
  }
}

export default Porfolio;
