import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons";

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
            <FontAwesomeIcon
              className="icon"
              id="linkedin"
              icon={faLinkedinIn}
            />
          </a>
          <div className="description">Visit my LinkedIn profile</div>
        </div>
        <div className="iconContainer">
          <a
            className="link"
            href="https://github.com/MPuzio15"
            target="_blank"
          >
            <FontAwesomeIcon className="icon" icon={faGithubSquare} />
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
            <FontAwesomeIcon className="icon" icon={faEnvelopeOpen} />
          </a>
          <div className="link" className="description">
            Send me an e-mail
          </div>
        </div>
        <div className="iconContainer">
          <a className="link" href="tel:+48786138516" target="_blank">
            <FontAwesomeIcon className="icon" icon={faPhoneSquare} />
          </a>
          <div className="description">or just call me (+48)786138515</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
