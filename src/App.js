import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

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
          <Switch>
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/blogs" component={Blogs} />
            {/* <Route exact path="/about" component={About} /> */}
            <Redirect from="/" to="/resume" />
          </Switch>
        </Page>
      </Router>
    );
  }
}

export default App;
