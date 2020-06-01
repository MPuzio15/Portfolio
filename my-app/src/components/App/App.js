import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "../Views/Main/Main";
import Portfolio from "../Views/Portfolio/Portfolio";
import Contact from "../Views/Contact/Contact";
import ErrorComponent from "../Views/ErrorComponent/ErrorComponent";
import NavContainer from "../Nav/NavContainer";
import Footer from "../Footer/Footer";

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <>
          <NavContainer />
          <section className="sectionNav">
            <Switch>
              <Route path="/" exact component={Main}></Route>
              <Route path="/portfolio" component={Portfolio}></Route>
              <Route path="/contact" component={Contact}></Route>
              <Route component={ErrorComponent}></Route>
            </Switch>
          </section>
          <Footer />
        </>
      </Router>
    );
  }
}

export default App;
