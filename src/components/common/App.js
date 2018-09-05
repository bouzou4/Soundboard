import React, { Component } from "react";
import Header from './Header.js';
import HomePage from '../pages/HomePage.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <React.Fragment>
        <Header />
        <HomePage />
      </React.Fragment>
    );
  }
}