import React, { Component } from 'react';

import Quotes from './containers/Quotes/Quotes';
import Logo from './components/Logo/Logo';
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="columns">
          <Logo />
          <Content />
          <Quotes />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
