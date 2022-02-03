const mongoose = require("mongoose");

const { Schema, model } = require("mongoose");

// ============== SCHEMA ==============
const technologySchema = new Schema({
  technology: [
    {
      technologyName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50,
      },
      technologyContent: [
        {
          contentTitle: {
            type: String,
            required: true,
            trim: true,
          },
          contentBody: [
            {
              featureName: {
                type: String,
                required: true,
                trim: true,
                minlength: 1,
                maxlength: 50,
              },
              featureRating: {
                type: Number,
                maxlength: 5,
              },
              featureBody: {
                name: { type: String, required: true },
                content: [],
              },
              featureExample: [],
              featureReference: [],
            },
          ],
        },
      ],
    },
  ],
});

// ============== MONGOOSE MODEL ==============
const Technology = mongoose.model("Technology", technologySchema);

// ============== SEED DATA ==============
const techContent = [
  {
    contentTitle: "Variables",
    contentBody: [
      {
        featureName: "Var",
        featureRating: 4,
        featureBody: "Do not use this.",
        featureExample: ["Some code.", "Some more code."],
        featureReference: [
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var",
          "https://www.w3schools.com/jsref/jsref_var.asp",
        ],
      },
    ],
  },
];

// ============== SEED COLLECTION ==============
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

// ============== EXPORT MODEL ==============
module.exports = Technology;
