import React, { Component } from 'react';
import SoundButton from './SoundButton.js';

export default class SoundTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sounds: ["hey", "yo"]
    }
  }

  render() {
    return(
      <div className="soundtable-container">
        {this.state.sounds.map(function(el, ind) {
          return (
            <SoundButton key={ind} sound={el} />
          );
        })}
      </div>
    );
  }
}