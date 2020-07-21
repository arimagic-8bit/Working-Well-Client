import React, { Component } from "react";

import { Link } from "react-router-dom";
import { actConsum } from "../lib/ActivityProvider";

class ModalComplete extends Component {
  render() {
    const { rest, largeBreak, allActivities } = this.props;
    const showOrHide = this.props.show
      ? "modal display-block"
      : "modal display-none";

    return (
      <div className={showOrHide}>
        <div className="modal-main">
          <p className="normal-text center bold">Congrats!</p>
          <p className="normal-text center">You are ready to go</p>
          <div>
            {allActivities[0] &&
              allActivities.map((activity, index) => {
                return (
                  <div className="activity-container" key={index}>
                    <p>{activity.title}</p>
                    <p>
                      {activity.completion}{" "}
                      {activity.completion === "1" ? "minute" : "minutes"}
                    </p>
                  </div>
                );
              })}
          </div>
          <p className="normal-text center spaced-top">
            <span className="bold">Time between activities:</span> {rest}{" "}
            {rest === "1" ? "minute" : "minutes"}
          </p>
          <p className="normal-text center">
            <span className="bold">Final break:</span> {largeBreak}{" "}
            {largeBreak === "1" ? "minute" : "minutes"}
          </p>
          <div className="spaced-bot">
            <Link
              className="go"
              to={"/timerWork"}
              onClick={() => this.props.setAllActivities(allActivities)}
            >
              Go!
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default actConsum(ModalComplete);
