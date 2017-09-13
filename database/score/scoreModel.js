const mongoose = require('mongoose');
const User = require('../users/userModel.js');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017', {
  useMongoClient: true
});

// Table relationships: Reference
const scoreSchema = {
  user: { type: mongoose.Schema.Types.ObjectId, ref: User, required: true },
  score: { type: Number, required: true }
}

module.exports = mongoose.model('Score', scoreSchema)