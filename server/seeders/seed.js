const db = require('../config/connection');
const { User, Technology } = require('../models');
const techSeeds = require('./techSeeds.json');
const thoughtSeeds = require('./thoughtSeeds.json');

db.once('open', async () => {
  try {
    await Technology.deleteMany({});

    Technology.create(techSeeds);
    
    for (let i = 0; i < techSeeds.length; i++) {
      const { _id, thoughtAuthor } = await Technology.create(thoughtSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: thoughtAuthor },
        {
          $addToSet: {
            thoughts: _id,
          },
        }
      );
    }

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
