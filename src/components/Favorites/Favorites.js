import React, { Component } from "react";
import axios from "axios";

class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      faves: []
    };
  }

  componentDidMount() {
    axios.get("/api/drivers/getfavorites").then(res => {
      console.log("PLEASE WORK!", res);
      this.setState({ faves: res.data });
    });
  }

  render() {
    let displayFaves = this.state.faves.map((element, index) => {
      return (
        <div className="fav_drivers">
          {element.givenName} {element.familyName} {element.nationality}
          {element.permanentNumber}
          {element.dateOfBirth}
        </div>
      );
    });

    // console.log(displayFaves);
    return <div>{displayFaves}</div>;
  }
}
export default Favorites;
