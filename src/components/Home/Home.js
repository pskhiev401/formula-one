import React, { Component } from "react";
import "./Home.css";
import Drivers from "../Drivers/Drivers";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="video_player">video_player-yellow</div>
        <div className="upcoming_box">
          upcoming_box-MAIN green
          <div className="upcoming_top">upcoming_top-red</div>
          <div className="upcoming_bottom">
            <div className="upcoming_left">
              upcoming_left-pink, Drivers(Child)
              <Drivers className="upcoming_left_child" />
            </div>
            <div className="upcoming_right">upcoming_right-track info-grey</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
