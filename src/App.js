import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <Switch>
        </Switch>
        <Footer />
      </main>
    );
  }
}

export default App;
