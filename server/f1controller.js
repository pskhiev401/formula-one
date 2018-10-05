// --------- IMPORT DEPENDENCIES ----------
const axios = require("axios");

let drivers = [];
let updatedDrivers = [];

// ----------- REST LOGIC HERE ------------
const getAllDrivers = (req, res, next) => {
  axios.get("http://ergast.com/api/f1/2018/drivers.json").then(response => {
    drivers = response.data.MRData;
    res.status(200).send(drivers);
  });
};

//postTopFive
//get

//addFavDriver
//post

//deleteDriver
//delete

//updateTrackInfo
//put

// ------------- EXPORT -------------------

module.exports = {
  getAllDrivers
  // postTopFive,
  // addFavDriver,
  // deleteDriver,
  // updateTrackInfo
};
