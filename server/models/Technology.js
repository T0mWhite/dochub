const mongoose = require("mongoose");

const { Schema, model } = require("mongoose");

// ============== SCHEMA ==============
const technologySchema = new Schema({
  technologyName: {
    type: String,
    // required: true,
    minlength: 1,
    maxlength: 50,
  },
  technologyContents: [
    {
      contentTitle: {
        type: String,
        // required: true,
        trim: true,
      },
      contentBody: [
        {
          featureName: {
            type: String,
            // required: true,
            trim: true,
            minlength: 1,
            maxlength: 50,
          },
          featureRating: {
            type: Number,
            maxlength: 5,
          },
          featureBody: {
            type: String,
            // required: true,
          },
          featureExample: [],
          featureReference: [],
        },
      ],
    },
  ],
});

// ============== MONGOOSE MODEL ==============
const Technology = mongoose.model("Technology", technologySchema);

// ============== EXPORT MODEL ==============
module.exports = Technology;
