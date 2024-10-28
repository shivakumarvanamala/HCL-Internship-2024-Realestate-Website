const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listings.js");

async function main() {
  await mongoose.connect(
    "mongodb+srv://shivakumarvanamala:shivakumarvanamala@cluster0.gtnsi.mongodb.net/HavenHeights"
  );
}

main()
  .then(() => {
    console.log("Mongoose is connected Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "671fb0c721bc272044097ff0",
  }));
  await Listing.insertMany(initData.data);
  console.log("Data was InitialiZed");
};

initDB();
