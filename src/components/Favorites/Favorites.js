import React, { Component } from "react";
import axios from "axios";
import "./Favorites.css";

class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      faves: [],
      userInput: ""
    };

    this.updateHandler = this.updateHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
  }

  componentDidMount() {
    axios.get("/api/drivers/getfavorites").then(res => {
      // console.log(res.data);
      this.setState({ faves: res.data });
    });
  }

  updateHandler(id, notes) {
    // console.log(notes, this.state.faves, this.state.userInput);
    axios
      .put(`/api/drivers/updatedDrivers/${id}`, { notes })
      .then(res => {
        this.setState({ faves: res.data, userInput: "" });
      })
      .catch(err => console.log(err));
  }

  deleteHandler(id) {
    console.log(id);
    axios
      .delete(`/api/drivers/updatedDrivers/${id}`)
      .then(res => {
        this.setState({ faves: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.userInput);
    let displayFaves = this.state.faves.map((element, index) => {
      return (
        <div className="fav_drivers" key={index}>
          <img
            className="img_left"
            src="https://t2.uc.ltmcdn.com/en/images/2/9/8/img_who_is_the_stig_on_top_gear_10892_600.jpg"
            alt="404 ERROR NO IMGAGE FOUND"
          />
          <div className="text_right">
            <p>{element.name}</p>
            <p>DOB: {element.dateOfBirth}</p>
            <p>Nationality: {element.nationality}</p>
            <p> Car # {element.permanentNumber}</p>
            <div>Notes: {element.notes}</div>
            <input
              onChange={e => this.setState({ userInput: e.target.value })}
              placeholder="Type Notes"
            />
            <button
              onClick={() =>
                this.updateHandler(element.id, this.state.userInput)
              }
            >
              Update
            </button>

            <button onClick={() => this.deleteHandler(element.id)}>
              Delete
            </button>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div className="main_fav_container">
          <div className="faves_card_box">{displayFaves}</div>
        </div>
      </div>
    );
  }
}
export default Favorites;
