import React, { Component } from 'react';
import Banner from './Banner'
import Content from './Content'
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <Content />
      </div>
    );
  }
}

export default App;
