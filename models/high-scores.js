const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const HighScores = new Schema({
  initials:{
type: String
  },

  score:{
type:Number
  }
});

module.exports = HighScore = mongoose.model("HighScores", HighScores);
