// --------- IMPORT DEPENDENCIES ----------
const axios = require("axios");

// Since there is no database, this is where we will store our data.
let drivers = [];
let favoriteDrivers = [];
let id = 0;

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
  // `${givenName} ${familyName}`
  // console.log(req.body.element);
  const { name, givenName, familyName, nationality, permanentNumber, dateOfBirth, notes } = req.body.element;
  let favorites = {
    id,
    name:`${givenName} ${familyName}`,
    nationality,
    permanentNumber,
    dateOfBirth,
    notes
  };
  favoriteDrivers.push(favorites);
  id++;
  res.status(200).send(favoriteDrivers);
};
//post

//display after POST
const displayFavDriver = (req, res, next) => {
  // console.log(favoriteDrivers);
  res.status(200).json(favoriteDrivers);
};

//update driver notes
// we needed to recreate the drivers card, and then send to the front end
const updateDriverNotes = (req, res, next) => {
  console.log(req.params.id, req.body.notes);

  const { notes } = req.body;
  const editID = req.params.id;
  const editIndex = favoriteDrivers.findIndex(driver => driver.id == editID);
  let drivers = favoriteDrivers[editIndex];
  favoriteDrivers[editIndex] = {
    id: drivers.id,
    name: drivers.name,
    nationality: drivers.nationality,
    permanentNumber: drivers.permanentNumber,
    dateOfBirth: drivers.dateOfBirth,
    notes: notes || drivers.notes
  };
  return res.status(200).json(favoriteDrivers);
};

//deleteDriver
//delete

//updateTrackInfo
//put

// ------------------ EXPORT -------------------
// we must export in to connect to server/index.js
module.exports = {
  getAllDrivers,
  displayFavDriver,
  updateDriverNotes,
  // postTopFive,
  addFavDriver
  // deleteDriver,
  // updateTrackInfo
};
