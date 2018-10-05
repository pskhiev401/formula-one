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
        <div className="video_player">PHOTO CAROSEL OR VIDEO GOES HERE</div>
        <div className="upcoming_box">
          UPCOMING RACE
          <div className="upcoming_innerbox">
            <div className="upcoming_left">
              <Drivers />
            </div>
            <div className="upcoming_right">
              <div className="upcoming_top" />
              <div className="upcoming_bottom" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
