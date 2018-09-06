import React, { Component } from 'react';
import { Col, Button } from 'react-bootstrap';
import ReactAudioPlayer from 'react-audio-player';

export default class SoundButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.audio.audioEl.play();
  }

  render() {
    return(
      <Col lg={2} sm={4} xs={6} onClick={this.handleClick}> 
        <Button bsStyle="primary" className="soundbutton-container">
          <ReactAudioPlayer
            src={`./sounds/villager/${this.props.sound}`}
            ref={(element) => { this.audio = element; }}
          />
          <p>{this.props.sound}</p>
          <p><b>Play</b></p>
        </Button>
      </Col>
    );
  }
}