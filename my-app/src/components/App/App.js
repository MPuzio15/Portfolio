import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "../Main/Main";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contanct/Contact";
import NavContainer from "../Nav/NavContainer";

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <NavContainer />
          <section>
            <Route path="/" exact component={Main}></Route>
            <Route path="/portfolio" component={Portfolio}></Route>
            <Route path="/contact" component={Contact}></Route>
          </section>
        </>
      </Router>
    );
  }
}

export default App;
