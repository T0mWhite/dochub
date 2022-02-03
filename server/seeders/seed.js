const db = require('../config/connection');
const { Technology } = require('../models');
const techSeeds = require('./techSeeds.json');

db.once('open', async () => {
  try {
    
    await Technology.deleteMany({});

    Technology.create(
      { technologyName: "Javascript", technologyContent: techContent },
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
        }
      }
    );
   
    for (let i = 0; i < thoughtSeeds.length; i++) {
      const { _id, thoughtAuthor } = await Thought.create(thoughtSeeds[i]);
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
