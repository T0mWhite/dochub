const db = require("../config/connection");
const { Technology } = require("../models");
let techSeeds = require("./techSeeds.json");

db.once("open", async () => {
  try {
    await Technology.deleteMany({}, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(
          "=================== 🚨 TECHNOLOGY SEED DESTROYED 🚨 ==================="
        );
      }
    });

    await Technology.create({ techSeeds }, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(
          `${data} ==================== 🌱 TECHNOLOGY SEEDED 🌱 ==================`
        );
      }
    });
    // techSeeds = techSeeds.map((techSeed) => {
    //   return [...techSeeds, techSeed]
    // })
    for (let i = 0; i < techSeeds.length; i++) {
      const { _id, technologyName } = await Technology.create(techSeeds[i]);
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
