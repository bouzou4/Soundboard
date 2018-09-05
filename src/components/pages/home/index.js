import React, { Component } from 'react';
import SoundTable from './components/SoundTable.js';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="content">
          <h1>Your Sounds</h1>
          <SoundTable />
      </div>
    );
  }
}