import React, { Component } from "react";
import { Link } from "react-router-dom";
import success from "../images/fogg-unsubscribed-1.png";

class TimeToWork extends Component {
  render() {
    const showOrHide = this.props.show
      ? "modal display-block"
      : "modal display-none";

    return (
      <div className={showOrHide}>
        <div className="modal-main">
          <p className="timer-title">Time to work!</p>
          <p className="normal-text center">Let's continue with another task</p>
          <div className="img-cont">
            <img className="image" src={success} alt="climb a mountain" />
          </div>
          <div className="btn-cont">
            <Link
              className="go"
              to={"/timerWork"}
              onClick={this.props.handleClose}
            >
              Ok
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default TimeToWork;
