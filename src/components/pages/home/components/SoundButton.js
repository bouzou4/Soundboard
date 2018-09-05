import React, { Component } from 'react';

export default class SoundButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return(
      <div className="soundbutton-container">
        {this.props.sound}
      </div>
    );
  }
}