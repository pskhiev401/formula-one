import React, { Component } from "react";
import axios from "axios";
import "./Drivers.css";

class Drivers extends Component {
  constructor() {
    super();
    this.state = {
      drivers: []
    };
  }

  componentDidMount() {
    axios.get("/api/drivers").then(response => {
      console.log(response.data);
      this.setState({ drivers: response.data.DriverTable.Drivers });
    });
  }

  render() {
    console.log(this.state.drivers);
    let map = this.state.drivers.map((element, index) => {
      return (
        <div key={index}>
          <h5 className="left_drivers">
            {element.givenName} {element.familyName}{" "}
          </h5>
          <button>ADD</button>
          {/* <h3>{`${element.givenName} ${element.familyName}`} </h3> */}
        </div>
      );
    });

    return (
      <div>
        Drivers List
        {map}
      </div>
    );
  }
}
export default Drivers;
