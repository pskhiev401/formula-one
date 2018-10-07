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
      // console.log(response.data);
      this.setState({ drivers: response.data.DriverTable.Drivers });
    });
  }

  favoritesHandler(element) {
    // console.log(element);
    axios.post("/api/drivers/addfavorites", { element });
  }

  render() {
    // console.log(this.state.drivers);
    return (
      <div>
        {this.state.drivers.map((element, index) => {
          return (
            <div className='driver_div' key={index}>
              {element.givenName} {element.familyName}
              <button className='add_button' onClick={() => this.favoritesHandler(element)}>ADD</button>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Drivers;
