import React, { Component } from "react";
import "./App.css";
// import Drivers from "./components/Drivers/Drivers";
import Home from "./components/Home/Home";
import Favorites from "./components/Favorites/Favorites";

class App extends Component {
  constructor() {
    super();
    this.state = {
      toggle: "home"
    };
  }

  // component did mount moved into "drivers page"

  displayToggler = () => {
    const { toggle } = this.state;
    if (toggle === "home") {
      return <Home toggleTrack={this.toggleTrack} />;
    } else if (toggle === "drivers") {
      return <Favorites />;
    } else if (toggle === "track") {
      // return <Track />
    }
  };

  toggleHome = () => {
    this.setState({ toggle: "home" });
  };

  toggleDrivers = () => {
    this.setState({ toggle: "drivers" });
  };

  toggleTrack = () => {
    this.setState({ toggle: "track" });
  };

  render() {
    return (
      <div>
        <div className="header_container">
          <div className="logo_left">
            <img src={require("./ModernF1Logo.png")} />
          </div>
          <div className="right_navButtons">
            <button onClick={this.toggleHome} className="button">
              Home
            </button>
            <button onClick={this.toggleDrivers} className="button">
              Favorites
            </button>
            <button onClick={this.toggleTrack} className="button">
              Track
            </button>
          </div>
        </div>
        <div className="main_content">{this.displayToggler()}</div>
      </div>
    );
  }
}

export default App;
