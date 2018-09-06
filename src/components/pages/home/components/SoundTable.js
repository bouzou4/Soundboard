import React, { Component } from 'react';
import axios from 'axios';
import SoundButton from './SoundButton.js';

export default class SoundTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sounds: []
    }

    this.getSoundList = this.getSoundList.bind(this);
  }

  componentDidMount() {
    this.getSoundList();
  }

  getSoundList() {
    axios.get('/sounds')
    .then((res) => {
      this
      this.setState({
        sounds: res.data
      });
    })
  }

  render() {
    return(
      <div className="soundtable-container">
        {this.state.sounds.map(function(el, ind) {
          return (
            <SoundButton key={ind} index={ind} sound={el} className="soundbutton-container" />
          );
        })}
      </div>
    );
  }
}