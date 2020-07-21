import React, { Component } from "react";
import { actConsum } from "../lib/ActivityProvider";
import GreatWork from "./GreatWork";

import workgirl from "../images/clip-993.png";

class TimerWork extends Component {
  state = {
    show: true,
  };

  componentDidMount() {
    this.props.setWorkTimer();
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  render() {
    const { minutes, seconds, length, index } = this.props;
    const { show } = this.state;

    return (
      <div className="page-container">
        <div className="title-container">
          <h1 className="work-well">
            <span>W</span>ORK <span>W</span>ELL
          </h1>
        </div>
        <div className="blue-container">
          <p className="timer-title">IT'S TIME TO WORK!</p>
          <div className="number-container">
            <p className="number">
              {index}/{length}
            </p>
          </div>
          <div className="img-cont">
            <img className="image" src={workgirl} alt="Girl working with pc" />
          </div>

          {minutes === 0 && seconds === 0 ? (
            <GreatWork handleClose={this.handleClose} show={show} />
          ) : (
            <div>
              <p className="time">Time remaining:</p>
              <p className="time">
                {minutes < 10 ? `0${minutes}` : minutes} :{" "}
                {seconds < 10 ? `0${seconds}` : seconds}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default actConsum(TimerWork);
