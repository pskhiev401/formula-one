import React, { Component } from "react";
import "./Track.css";

class Track extends Component {
  render() {
    return (
      <div className="track_container">
        <div className="track_two_divs">
          <img className="photo" src={require("../../Track_info.png")} />
        </div>
      </div>
    );
  }
}
export default Track;
