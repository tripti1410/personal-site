import React, { Component } from 'react';
import './global.css';
import Page from "./components/page/page";
import About from "./pages/about/about";
import Resume from "./pages/resume/resume";
import Blogs from "./pages/blogs/blogs";

class App extends Component {
  render() {
    return (
      <Page>
        {/* <About /> */}
        {/* <Resume /> */}
        <Blogs />
      </Page>
    );
  }
}

export default App;
