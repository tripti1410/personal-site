import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./global.css";
import Page from "./components/page/page";
import About from "./pages/about/about";
import Resume from "./pages/resume/resume";
import Blogs from "./pages/blogs/blogs";

class App extends Component {
  render() {
    return (
      <Router>
        <Page>
          <Route exact path="/" component={Resume} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/about" component={About} />
        </Page>
      </Router>
    );
  }
}

export default App;
