const db = require('../config/connection');
const { Technology } = require('../models');
const techSeeds = require('./techSeeds.json');

db.once('open', async () => {
  try {
    
    await Technology.deleteMany({});

    Technology.create(techSeeds);
    
    for (let i = 0; i < techSeeds.length; i++) {

      const tech = await Technology.create(thoughtSeeds[i]);
    }

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
