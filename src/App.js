import React, { Component } from 'react';
import './App.css';
import Root from './routes.js'
import configureStore from './Store/configureStore'

const store = configureStore();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Root store={store}/>
      </div>
    );
  }
}

export default App;
