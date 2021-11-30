import React from "react";
import "./Contact.css";
import linkedInIcon from "../../../assets/icons/linkedIn.png";
import envelopeIcon from "../../../assets/icons/envelope.png";
import githubIcon from "../../../assets/icons/github.png";

const Contact = () => {
  return (
    <section className="contactContainer">
      <div className="icons">
        <div className="iconContainer">
          <a
            className="link"
            href="https://www.linkedin.com/in/martyna-p-b81909145/"
            target="_blank"
            rel="noopener"
          >
            <img className="icon" id="linkedin" src={linkedInIcon} />
          </a>
          <div className="description">Visit my LinkedIn profile</div>
        </div>
        <div className="iconContainer">
          <a
            className="link"
            href="https://github.com/MPuzio15"
            target="_blank"
          >
            <img className="icon" src={githubIcon} />
          </a>
          <div className="description">
            Go to my GitHub account to see more projects
          </div>
        </div>
        <div className="iconContainer">
          <a
            className="link"
            href="mailto: mrtnpuzio@gmail.com"
            target="_blank"
          >
            <img className="icon" src={envelopeIcon} />
          </a>
          <div className="link" className="description">
            Send me an e-mail
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
