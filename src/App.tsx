import React, { Component } from 'react';
import './App.scss';

export class App extends Component {
  render() {
    return(
      <div>
        <div className="row">
          <div className="row-col-6 color-1">1-REACT + TYPESCRIPT!!!</div>
          <div className="row-col-6 color-2">2-REACT + TYPESCRIPT!!!</div>
        </div>
        <div className="row">
          <div className="row-col-9 color-3">3-REACT + TYPESCRIPT!!!</div>
          <div className="row-col-3 color-4">4-REACT + TYPESCRIPT!!!</div>
        </div>
      </div>
    );
  }
}

export default App;
