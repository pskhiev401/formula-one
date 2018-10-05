import React, { Component } from "react";
import "./App.css";
import Drivers from "./components/Drivers/Drivers";
import Home from "./components/Home/Home";

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
      return <Home />;
    } else if (toggle === "drivers") {
      return <Drivers />;
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
        <div className="login_div">
          <button className="login_button">Login</button>
        </div>
        <header>
          <div className="header_container">
            <div className="logo_left">Logo</div>
            <div className="right_navButtons">
              <button onClick={this.toggleHome} className="button">
                Home
              </button>
              <button onClick={this.toggleDrivers} className="button">
                Drivers
              </button>
              <button onClick={this.toggleTrack} className="button">
                Track
              </button>
            </div>
          </div>
        </header>
        <div className="main_content">{this.displayToggler()}</div>
      </div>
    );
  }
}

export default App;
