// --------- IMPORT DEPENDENCIES ----------
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3001;

// dont forget to deconstruct
const { getAllDrivers, displayFavDriver,addFavDriver } = require("./f1controller");

app.use(json());
app.use(cors());
//------------- REST ENDPOINTS------
//Initial GET request to get all 2018 drivers
app.get("/api/drivers", getAllDrivers);



//app.get(,postTopFive)
//dont forget to deconstruct

app.post("/api/drivers/addfavorites",addFavDriver)
app.get("/api/drivers/getfavorites", displayFavDriver);
//dont forget to deconstruct

//app.delete(,deleteDriver)
//dont forget to deconstruct

//app.put(, updateTrackInfo)
//dont forget to deconstruct

//------------PORT TESTER ----------------
app.listen(port, () => {
  console.log(`BEEEP server connected on port ${port}`);
});
