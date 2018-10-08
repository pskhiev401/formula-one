import React, { Component } from "react";
import "./Home.css";
import Drivers from "../Drivers/Drivers";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="video_player_box">
          <iframe
            height="100%"
            width="100%"
            src="https://www.youtube.com/embed/noKOQmc0a1w?rel=0&amp;showinfo=0&amp;start=120"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          />
        </div>
        <div className="upcoming_box">
          <div className="upcoming_top">UPCOMING RACE</div>
          <div className="upcoming_bottom">
            <div className="upcoming_left">
              <h2>2018 SEASON | DRIVERS LIST</h2>
              <br />
              <Drivers className="upcoming_left_child" />
            </div>

            <div className="upcoming_right">
              <div className="upcoming_right_top">
                <div className="track_title">
                  <h1>USA 2018</h1>
                  <h1>|</h1>
                  <h1>AUSTIN TEXAS</h1>
                </div>
              </div>

              <div className="track_title2">
                <img className="circuit_logo" src={require("../../track_logo_sm.png")}/>
                <button className='info_button' onClick={() => this.props.toggleTrack()}>
                  TRACK INFO
                </button>
              </div>

              <div className="upcoming_right_bottom">
                <img src={require("../../track_layout.png")} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
