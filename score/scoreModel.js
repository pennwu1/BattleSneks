const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017', {
  useMongoClient: true
});

// bcrypt

const userSchema = {
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true }
}

module.exports = mongoose.model('User', userSchema)