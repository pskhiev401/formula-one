// --------- IMPORT DEPENDENCIES ----------
const axios = require("axios");

let drivers = [];
let favoriteDrivers = [];

// ----------- REST LOGIC HERE ------------
const getAllDrivers = (req, res, next) => {
  axios.get("http://ergast.com/api/f1/2018/drivers.json").then(response => {
    drivers = response.data.MRData;
    res.status(200).send(drivers);
  });
};

//postTopFive
//get

const addFavDriver = (req, res, next) => {
  console.log(req.body.element);
  favoriteDrivers.push(req.body.element);
  res.status(200).send(favoriteDrivers);
};
//post

const displayFavDriver = (req, res, next) => {
  console.log(favoriteDrivers);
  res.status(200).json(favoriteDrivers);
};

//deleteDriver
//delete

//updateTrackInfo
//put

// ------------- EXPORT -------------------

module.exports = {
  getAllDrivers,
  displayFavDriver,
  // postTopFive,
  addFavDriver
  // deleteDriver,
  // updateTrackInfo
};
