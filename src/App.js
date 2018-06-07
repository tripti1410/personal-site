import React, { Component } from 'react';
import './global.css';
import Page from "./components/page/page";
import About from "./pages/about/about";

class App extends Component {
  render() {
    return (
      <Page>
        <About />
      </Page>
    );
  }
}

export default App;
