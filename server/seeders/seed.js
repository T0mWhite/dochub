const db = require("../config/connection");
const { Technology, User } = require("../models");
let techSeeds = require("./techSeeds.json");
let userSeeds = require("./userSeeds.json");

db.once("open", async () => {
  try {
    // ============ TECHNOLOGY SEED =========
    await Technology.deleteMany({}, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(
          "=================== 🚨 TECHNOLOGY SEED DESTROYED 🚨 =========="
        );
      }
    });

    const technologyData = await Technology.insertMany(techSeeds);
    console.log("==================== 🌱 TECHNOLOGY SEEDED 🌱 ===============");

    // ======================== USER SEED ====================
    await User.deleteMany({}, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(
          "=================== 🚨 USER SEED DESTROYED 🚨 ================"
        );
      }
    });

    const userData = await User.insertMany(userSeeds);
    console.log("==================== 🌱 USER SEEDED 🌱 ===============");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("=================== 🌟 SEEDING COMPLETE 🌟 ===================");
  process.exit(0);
});
