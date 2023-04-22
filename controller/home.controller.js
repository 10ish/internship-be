const db = require("../model");
const User = db.user;

//function to get all the users
exports.getAll = async (req, res) => {
  try {
    const users = await User.findAll();
    let resultArray = [];
    for (i = 0; i < users.length; i++) {
      console.log(users[i]);
      const address = await users[i].getAddress();
      const geoCoordinates = await address.getGeoCoordinate();
      const obj = { userInfo: users[i], address: address, geo: geoCoordinates };
      resultArray.push(obj)
    }
    //console.log(users)

    res.status(200).send(resultArray);
  } catch {}
};
