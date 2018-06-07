import React, { Component } from 'react';
import './global.css';
import Page from "./components/page/page";
import About from "./pages/about/about";
import Resume from "./pages/resume/resume";

class App extends Component {
  render() {
    return (
      <Page>
        {/* <About /> */}
        <Resume />
      </Page>
    );
  }
}

export default App;
